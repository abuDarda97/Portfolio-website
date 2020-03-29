const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader' ]},
      { 
        test: /\.(png|svg|jpg|gif)$/, 
        use:
         [
           {
             loader: 'url-loader',
           },
           {
             loader: 'image-webpack-loader',
           }
         ]
      }
    ]
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};