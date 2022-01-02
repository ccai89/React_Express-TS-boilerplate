const path = require('path');
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new Dotenv(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};