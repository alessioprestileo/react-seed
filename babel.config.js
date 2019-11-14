module.exports = (api) => {
  const env = api.env();
  const presets = [
    '@babel/env',
    '@babel/typescript',
    '@babel/react',
  ];
  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    ['@babel/plugin-transform-runtime',
      {
        'regenerator': true,
      },
    ],
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
