module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['http://localhost/', 'http://localhost/work/'],
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--headless --no-sandbox',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'interaction-to-next-paint': ['warn', { maxNumericValue: 200 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci-reports',
    },
  },
};
