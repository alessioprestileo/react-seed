const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const CookieParser = require('cookie-parser'); // eslint-disable-line import/no-extraneous-dependencies

const pathToProjectRoot = path.resolve(__dirname, '../../');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(pathToProjectRoot, 'src/index.tsx'),
    babelPolyfill: '@babel/polyfill',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(pathToProjectRoot, 'build_dev'),
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  devServer: {
    before: (app) => {
      app.use(CookieParser());
    },
    contentBase: path.join(pathToProjectRoot, 'build_dev'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 3001,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: [
          /node_modules/,
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              envName: 'development',
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: 30000,
              fallback: require.resolve('file-loader'),
            },
          },
        ],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: require.resolve('file-loader'),
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(pathToProjectRoot, 'src/index.template.html'),
    }),
    new CopyWebpackPlugin([
      { from: path.join(pathToProjectRoot, 'favicon.ico'), to: 'favicon.ico' },
      { from: path.join(pathToProjectRoot, 'src/react-assets'), to: './react-assets' },
    ]),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
