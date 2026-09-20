import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { additionalProducts } from '../../src/data/additionalProducts';
import { experience, profile } from '../../src/data/profile';

const workDirectory = resolve(process.cwd(), 'src/content/work');
const caseStudyFiles = readdirSync(workDirectory).filter((file) => file.endsWith('.md'));

describe('portfolio content', () => {
  it('contains eight featured case studies and three additional products', () => {
    expect(caseStudyFiles).toHaveLength(8);
    expect(additionalProducts).toHaveLength(3);
  });

  it('contains eleven unique selected project names', () => {
    const featuredNames = caseStudyFiles.map((file) => {
      const content = readFileSync(resolve(workDirectory, file), 'utf8');
      return content.match(/^shortTitle: '(.+)'$/m)?.[1];
    });
    const names = [...featuredNames, ...additionalProducts.map((project) => project.name)];
    expect(names.every(Boolean)).toBe(true);
    expect(new Set(names).size).toBe(11);
  });

  it('keeps every external project link secure', () => {
    for (const project of additionalProducts) expect(project.link).toMatch(/^https:\/\//);
  });

  it('requires canonical track metadata, attribution, and outcomes', () => {
    for (const file of caseStudyFiles) {
      const content = readFileSync(resolve(workDirectory, file), 'utf8');
      expect(content).toMatch(/^tracks: \[.+\]$/m);
      expect(content).toMatch(/^priority:$/m);
      expect(content).toMatch(/^attribution: '.+'$/m);
      expect(content).toMatch(/^outcomes:$/m);
      expect(content).toMatch(/^  - value: '.+'$/m);
    }
  });

  it('keeps the four-role chronology in the shared profile source', () => {
    expect(experience.map(({ id, period }) => ({ id, period }))).toEqual([
      { id: 'sellou-product-engineer', period: '08/2025 — Present' },
      { id: 'sellou-ios-lead', period: '02/2025 — 08/2025' },
      { id: 'iomob-team-lead', period: '02/2024 — 02/2025' },
      { id: 'iomob-ios-engineer', period: '02/2021 — 02/2024' },
    ]);
  });

  it('uses stable, separate resume URLs', () => {
    expect(profile.resumes.ai).toBe('/resume/Kirlos_Yousef_AI_Engineer.pdf');
    expect(profile.resumes.ios).toBe('/resume/Kirlos_Yousef_Senior_iOS_Engineer.pdf');
  });

  it('keeps route templates free of duplicated employment dates', () => {
    for (const route of ['src/pages/index.astro', 'src/components/TrackPage.astro']) {
      const content = readFileSync(resolve(process.cwd(), route), 'utf8');
      expect(content).not.toMatch(/02\/2025|08\/2025|02\/2024|02\/2021/);
    }
  });
});
