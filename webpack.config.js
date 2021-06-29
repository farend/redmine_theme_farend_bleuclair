// Output先:
// bleuclair/src/scripts以下はbleuclair/javascripts/theme.jsに
// bleuclair/src/styles以下はbleuclair/stylesheets/theme.cssに
// bleuclair/src/images以下はbleuclair/stylesheets/theme.cssの内部にDataURL形式で埋め込み
// bleuclair/src/webfonts以下はbleuclair/stylesheets/webfontsに

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  target: ['web', 'es5'],
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    // bleuclair.js output destination
    path: path.resolve(__dirname, 'javascripts'),
    filename: 'theme.js'
  },
  module: {
    rules: [
      // Compile JavaScript
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        // ES2015以降の新しい構文をES5の構文に変換
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // Compile Scss
      {
        test: [/\.scss$/],
        use: [
          // jsからスタイル部分を別ファイルとして出力('../stylesheets/theme.css')
          MiniCssExtractPlugin.loader,
          {
            // CSSスタイルシートをjsファイルに埋め込む 
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          },
          {
            // ベンダープレフィックスを自動で付与
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
            // ScssファイルをCSSに変換
            loader: 'sass-loader',
            options: {
              sourceMap: true
            },
          },
        ],
      },
      {
        // src/images以下のSVGファイルをDataURL形式でCSS内に埋め込み
        test: /\.(svg)$/i,
        include: path.resolve(__dirname, 'src/images'), 
        use: [{ loader: 'url-loader' }]
      },
      {
        // src/webfonts以下のファイルを../stylesheets/webfontsに出力し、パスを管理
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        include: path.resolve(__dirname, 'src/webfonts'), 
        use: [{
            loader: 'file-loader',
            options: {
                name: "[name].[ext]",
                outputPath: '../stylesheets/webfonts',
                publicPath: '../stylesheets/webfonts',
            }
        }]
      },
    ],
  },
  plugins:[
    // CSS output destination
    new MiniCssExtractPlugin({ filename: '../stylesheets/theme.css' }),
  ],
  optimization: {
    // CSSを最小化
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  }
}