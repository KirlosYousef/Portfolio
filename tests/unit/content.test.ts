import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { additionalProducts } from '../../src/data/additionalProducts';

const workDirectory = resolve(process.cwd(), 'src/content/work');
const caseStudyFiles = readdirSync(workDirectory).filter((file) => file.endsWith('.md'));

describe('portfolio content', () => {
  it('contains seven featured case studies and three additional products', () => {
    expect(caseStudyFiles).toHaveLength(7);
    expect(additionalProducts).toHaveLength(3);
  });

  it('contains ten unique selected project names', () => {
    const featuredNames = caseStudyFiles.map((file) => {
      const content = readFileSync(resolve(workDirectory, file), 'utf8');
      return content.match(/^shortTitle: '(.+)'$/m)?.[1];
    });
    const names = [...featuredNames, ...additionalProducts.map((project) => project.name)];
    expect(names.every(Boolean)).toBe(true);
    expect(new Set(names).size).toBe(10);
  });

  it('keeps every external project link secure', () => {
    for (const project of additionalProducts) {
      expect(project.link).toMatch(/^https:\/\//);
    }
  });

  it('requires attribution and at least one outcome in every case study', () => {
    for (const file of caseStudyFiles) {
      const content = readFileSync(resolve(workDirectory, file), 'utf8');
      expect(content).toMatch(/^attribution: '.+'$/m);
      expect(content).toMatch(/^outcomes:$/m);
      expect(content).toMatch(/^  - value: '.+'$/m);
    }
  });
});
