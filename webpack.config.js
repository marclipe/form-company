const path = require('path')

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "main.jsx"),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js",".jsx", ".ts", ".tsx"],
  },
};