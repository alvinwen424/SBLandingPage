module.exports = {
  mode: 'development',
  entry: './app/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {loader: 'babel-loader'},
          // {loader: 'url-loader?limit=100000', },
        ]
      }
    ]
  }
}
