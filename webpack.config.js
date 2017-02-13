module.exports = {
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: 'dist/assets'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'source-map'
}
