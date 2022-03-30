const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const Config = require('../src/config');

module.exports = {
  entry: path.resolve(__dirname, '../src/app/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.[contecthash].js',
    sourceMapFilename: 'bundle.[contecthash].js.map',
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, '../src/app'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@views': path.resolve(__dirname, '../src/view'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/public'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: Config.TITLE,
      teplate: path.resolve(__dirname, '../src/templates/index.js'),
      favicon: path.resolve(__dirname, '../src/public/icon/logo.svg'),
    }),
    new WebpackPwaManifest({
      name: 'Oneyel Coffee',
      short_name: 'Oneyel Coffee',
      description: Config.DESCRIPTION,
      background_color: '#fff',
      theme_color: '#e7dec8',
      crossorigin: 'use-credentials',
      publicPath: '.',
      icons: [
        {
          src: path.resolve(__dirname, '../src/public/icon/logo.svg'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve(__dirname, '../src/public/icon/logo.svg'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
  ],
};
