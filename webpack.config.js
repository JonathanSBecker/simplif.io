module.exports = {
  entry: "./client/index.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: "bundle.js"
  }
};