const path = require('path');

module.exports = {
  mode: 'development',
  target: 'async-node',
  entry: './src/server.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      midgar: path.resolve(__dirname, 'lib/midgar'),
      services: path.resolve(__dirname, 'src/services'),
      src: path.resolve(__dirname, 'src')
    }
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build')
  },
  node: {
    __dirname: false
  }
};