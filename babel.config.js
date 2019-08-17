module.exports = (api) => {
  const env = api.env();
  const presets = [
    '@babel/env',
    '@babel/typescript',
    '@babel/react',
  ];
  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/proposal-object-rest-spread',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-runtime',
  ];

  switch (env) {
    case 'development':
      break;
    case 'test':
      plugins.push('react-hot-loader/babel');
      break;
    case 'production':
    default:
      break;
  }

  return { presets, plugins };
};
