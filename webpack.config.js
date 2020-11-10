const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/styles/theme.scss',
  output: {
    path: path.resolve(__dirname, 'stylesheets'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: [/\.scss$/, /\.sass$/],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            },
          },
        ],
      },
      {
        test: /\.(svg)$/i,
        include: path.resolve(__dirname, 'src/images'), 
        use: [{ loader: 'url-loader' }]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        include: path.resolve(__dirname, 'src/webfonts'), 
        use: [{
            loader: 'file-loader',
            options: {
                name: "[name].[ext]",
                outputPath: './webfonts',
                publicPath: './webfonts',
            }
        }]
      },
    ],
  },
  plugins:[
    // cssの出力先を指定する
    new MiniCssExtractPlugin({ filename: 'theme.css' }),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  devServer: {
    contentBase: 'build',
    inline: true,
    hot: true
  }
}