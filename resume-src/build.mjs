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
body { font: 8.9pt/1.28 "Helvetica Neue", Arial, sans-serif; color: #1a1a1a; margin: 0; }
a { color: inherit; text-decoration: none; }
h1 { font-size: 19pt; margin: 0; letter-spacing: -0.2px; }
.sub { font-size: 10pt; color: #333; margin: 1px 0 3px; }
.contact { font-size: 8.4pt; color: #444; }
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
  <div class="contact">${r.contact.map(a).join(' · ')} · ${esc(r.tail)}</div>
  <h2>Summary</h2><p>${esc(r.summary)}</p>
  <h2>Technical skills</h2>${r.skills.map(([k, v]) => `<p class="skill"><b>${esc(k)}:</b> ${esc(v)}</p>`).join('')}
  <h2>Professional experience</h2>${exp}
  <h2>${r.projectsTitle}</h2>${proj}
  <h2>Education</h2><p>${esc(education)}</p></body></html>`;
}

const browser = await chromium.launch();
for (const [name, r] of Object.entries(resumes)) {
  const page = await browser.newPage();
  await page.setContent(html(r));
  const out = resolve(root, 'public/resume', `${name}.pdf`);
  await page.pdf({ path: out, format: 'Letter', preferCSSPageSize: true, printBackground: true });
}
await browser.close();
