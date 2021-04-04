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
          {
            // Creates `style` nodes from JS strings
            loader: 'style-loader'
          }, {
            // Translates CSS into CommonJS modules
            loader: 'css-loader'
          }, {
            // Run postcss actions
            loader: 'postcss-loader',
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          }, {
            // Compiles Sass to CSS
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.png$|\.jpg$|\.gif$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource'
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
        template: 'src/index.html',
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
