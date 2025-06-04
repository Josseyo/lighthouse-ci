module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: [
        'https://ltu-i0015n-2024-web.azurewebsites.net/'
      ],
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
