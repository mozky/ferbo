const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.s[ac]ss$|\.css/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ],
      },
      {
        test: /\.png$|\.jpg$|\.gif$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline'
      },
      {
        test: /\.ttf$|\.woff$|\.eot$/i,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'Ferbo & Kappa',
        template: './src/index.ejs',
        filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  }
}
