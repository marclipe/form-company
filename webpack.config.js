const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        use: {
          loader: 'babel-loader', 
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], 
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),
};