/*
 * Output configuration:
 *
 * JavaScript files in src/scripts will be compiled to the following directory:
 *   javascripts/theme.js
 *
 * CSS files in src/styles will be compiled to the following directory:
 *   stylesheets/theme.css
 *
 * Webfonts from node_modules will be copied to the following directory:
 *   stylesheets/webfonts
 *
 * Images from src/images will be copied to the following directory:
 *   stylesheets/images
 *
 * SVG images from src/images will be embedded in the CSS file if they are less 10 KB.
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

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
        url: true
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

// Define rules for copying fonts
const fontRule = {
  test: /\.(woff2|ttf|woff)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'webfonts/[name][ext]',
  },
};

// Define rules for handling images
const imageRule = {
  test: /\.(png|jpe?g|gif)$/i,  // Exclude svg from this rule
  type: 'asset/resource',
  generator: {
    filename: 'images/[name][ext]',
  },
};

// Define rules for embedding SVG images (< 10 KB)
const svgRule = {
  test: /\.svg$/i,
  type: 'asset',
  parser: {
    dataUrlCondition: {
      maxSize: 10 * 1024, // 10 KB
    },
  },
  generator: {
    filename: 'images/[name][ext]',
  },
};

module.exports = {
  target: ['web', 'es5'],
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './stylesheets'),
    filename: '../javascripts/theme.js',
    publicPath: '',
  },
  module: {
    rules: [
      jsRule,
      scssRule,
      fontRule,
      imageRule,
      svgRule,
    ],
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: `theme.css`,
    }),
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
