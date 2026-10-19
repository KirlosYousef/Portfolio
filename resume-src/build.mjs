import { chromium } from '@playwright/test';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { resumes, education } from './resumes.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const a = ([t, h]) => `<a href="${h}">${esc(t)}</a>`;

const css = `
@page { size: Letter; margin: 0.42in 0.5in; }
* { box-sizing: border-box; }
html { width: 7.5in; }
body { font: 8.9pt/1.28 "Helvetica Neue", Arial, sans-serif; color: #1a1a1a; margin: 0; }
/* Ligatures extract as single glyphs (ﬁ, ﬂ), which breaks ATS keyword matching. */
* { font-variant-ligatures: none; font-feature-settings: "liga" 0, "clig" 0; }
a { color: inherit; text-decoration: none; }
h1 { font-size: 19pt; margin: 0; letter-spacing: -0.2px; }
.sub { font-size: 10pt; color: #333; margin: 1px 0 3px; }
.contact { font-size: 8pt; color: #444; }
h2 { font-size: 9.2pt; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #999; margin: 8px 0 3px; padding-bottom: 1px; }
.row { display: flex; justify-content: space-between; gap: 8px; }
.co { font-weight: 700; margin-top: 3px; }
.role { font-weight: 600; margin-top: 2px; }
.muted { color: #555; font-weight: 400; }
ul { margin: 1px 0 1px 14px; padding: 0; }
li { margin: 0; padding: 0; }
p { margin: 0; }
.skill b { font-weight: 700; }
.proj { margin-top: 3px; font-weight: 700; }
.proj span { font-weight: 400; color: #444; }
.proj a { font-weight: 400; color: #1a4fa0; }
`;

function html(r) {
  const exp = r.experience
    .map(
      (c) => `
    <div class="row co"><span>${esc(c.company)} <span class="muted">— ${esc(c.place)}</span></span><span>${c.period}</span></div>
    ${c.roles
      .map(
        (
          x,
        ) => `<div class="row role"><span>${esc(x.title)}</span><span class="muted">${x.period}</span></div>
      <ul>${x.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`,
      )
      .join('')}`,
    )
    .join('');
  const proj = r.projects
    .map(
      (p) => `
    <div class="proj">${esc(p.name)} <span>— ${esc(p.desc)} · ${a(p.link)}</span></div>
    <ul>${p.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`,
    )
    .join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Kirlos Yousef — ${esc(r.title)}</title><style>${css}</style></head><body>
  <h1>Kirlos Yousef</h1><div class="sub">${esc(r.title)}</div>
  <div class="contact">${r.contact.map(a).join(' · ')}</div>
  <div class="contact">${esc(r.tail)}</div>
  <h2>Summary</h2><p>${esc(r.summary)}</p>
  <h2>Technical skills</h2>${r.skills.map(([k, v]) => `<p class="skill"><b>${esc(k)}:</b> ${esc(v)}</p>`).join('')}
  <h2>Professional experience</h2>${exp}
  <h2>${r.projectsTitle}</h2>${proj}
  <h2>Education</h2><p>${esc(education)}</p></body></html>`;
}

// Letter page minus the @page margins, in CSS pixels (96 per inch).
const contentWidth = (8.5 - 2 * 0.5) * 96;
const contentHeight = (11 - 2 * 0.42) * 96;

const browser = await chromium.launch();
for (const [name, r] of Object.entries(resumes)) {
  const page = await browser.newPage({
    viewport: { width: Math.ceil(contentWidth), height: 1200 },
  });
  await page.emulateMedia({ media: 'print' });
  await page.setContent(html(r));
  // Scale type and spacing together so each résumé fills exactly one page.
  const fits = (scale) =>
    page.evaluate((s) => {
      document.body.style.zoom = String(s);
      return document.documentElement.getBoundingClientRect().height;
    }, scale);
  let low = 1;
  let high = 1.4;
  for (let step = 0; step < 14; step += 1) {
    const mid = (low + high) / 2;
    if ((await fits(mid)) <= contentHeight - 6) low = mid;
    else high = mid;
  }
  // Step down from the largest fitting scale until no wrapped line ends in a stub.
  const orphans = () =>
    page.evaluate(
      () =>
        [...document.querySelectorAll('li, p')].filter((element) => {
          const range = document.createRange();
          range.selectNodeContents(element);
          const rows = [...range.getClientRects()].reduce((lines, rect) => {
            const line = lines.find((entry) => Math.abs(entry.top - rect.top) < 2);
            if (line) line.right = Math.max(line.right, rect.right);
            else lines.push({ top: rect.top, left: rect.left, right: rect.right });
            return lines;
          }, []);
          if (rows.length < 2) return false;
          const last = rows[rows.length - 1];
          return last.right - rows[0].left < element.getBoundingClientRect().width * 0.15;
        }).length,
    );
  let scale = low;
  while (scale > 1) {
    await fits(scale);
    if ((await orphans()) === 0) break;
    scale = Math.max(1, scale - 0.004);
  }
  low = scale;
  await fits(low);
  // Spread any leftover height across the section gaps so the page ends flush.
  await page.evaluate((target) => {
    const headings = [...document.querySelectorAll('h2')].slice(1);
    const zoom = Number(document.body.style.zoom) || 1;
    const spare = target - document.documentElement.getBoundingClientRect().height;
    const extra = Math.max(0, Math.min(spare / headings.length / zoom, 8));
    headings.forEach((heading) => {
      heading.style.marginTop = `${parseFloat(getComputedStyle(heading).marginTop) + extra}px`;
    });
  }, contentHeight - 8);
  const out = resolve(root, 'public/resume', `${name}.pdf`);
  await page.pdf({ path: out, format: 'Letter', preferCSSPageSize: true, printBackground: true });
  console.log(`${name}: scale ${low.toFixed(3)}`);
}
await browser.close();
