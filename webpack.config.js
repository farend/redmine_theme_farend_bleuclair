/*
 * Output configuration:
 *
 * JavaScript files in src/scripts will be compiled to the following directory:
 *   javascripts/theme.js
 *
 * CSS files in src/styles will be compiled to the following directory:
 *   stylesheets/theme.css
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// Define output directories
const scriptsOutputDir = 'javascripts';
const stylesOutputDir = 'stylesheets';

// Define rules for compiling JavaScript
const jsRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
};

// Define rules for compiling SCSS
const scssRule = {
  test: [/\.scss$/],
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        url: false
      },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            ["autoprefixer", { grid: true }],
          ],
        },
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      },
    },
  ],
};

module.exports = {
  target: ['web', 'es5'],
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, scriptsOutputDir),
    filename: 'theme.js'
  },
  module: {
    rules: [
      jsRule,
      scssRule,
    ],
  },
  plugins:[
    new MiniCssExtractPlugin({ filename: `../${stylesOutputDir}/theme.css` }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin({
      minimizerOptions: {
        preset: [
          "default",
          {
            colormin: { exclude: true },
          },
        ],
      },
    })],
  }
}
