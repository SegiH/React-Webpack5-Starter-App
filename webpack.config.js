const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  target: 'web',
  resolve: {
    extensions: ['.ts', '.js','.css','.png'],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/dist",
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ], 
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins:[
    new webpack.DefinePlugin({
        process: {env: {}}
    })
  ]
}

