const path = require('path')

module.exports = {
  entry: '/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'css-loader', options: { url: false, sourceMap: true } }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
