'use strict';

const webpack = require('webpack');
const path = require('path');
const build = require('./config/build');

const CHROME = !!~process.argv.indexOf('--chrome');

module.exports = config => {

  config.set({

    plugins: [
      !CHROME ? 'karma-phantomjs-launcher' : 'karma-chrome-launcher' ,
      'karma-webpack',
      'karma-tap',
      'karma-coverage'
    ],

    files: [
      'webpack.test.bootstrap.js'
    ],

    preprocessors: {
      'webpack.test.bootstrap.js': [ 'webpack' ]
    },

    exclude: [
    ],

    webpack: {
      cache: true,
      devtool: 'source-map',
      resolve: {
        extensions: [ '*', '.js', '.jsx', '.css' ],
        modules: [
          'node_modules',
          `${ build.projDir }/src`,
        ],
      },
      module: {
        rules: [{
          test: /\.jsx?$/,
          use: 'babel-loader',
        }, {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([
                  require('postcss-import')({path: ['node_modules', build.src]}),
                  require('postcss-cssnext')(),
                ]),
              },
            },
          ],
        }],

      },
      node: {
        fs: 'empty'
      },
      plugins: [
        new webpack.IgnorePlugin(/react\/lib\/ReactContext/),
        new webpack.IgnorePlugin(/ReactContext|react\/addons/)
      ],

    },

    webpackServer: {
      noInfo: true
    },

    basePath: '',
    frameworks: [ 'tap' ],
    browsers: !CHROME ? [ 'PhantomJS' ] : [ 'Chrome' ],
    singleRun: true,
    concurrency: Infinity,
    reporters: [
      'dots',
      'coverage'
    ],
    coverageReporter: {
      type: 'text',
      dir: 'coverage',
      reporters: [
        { type: 'json', subdir: '.', file: 'coverage.json' },
        { type: 'text', subdir: '.', file: 'coverage.txt' },
        { type: 'text-summary', subdir: '.' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true

  });

};
