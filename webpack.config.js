const path = require('path');

module.exports = {
  entry: './src/components/collectionWidget/collectionWidget.js',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend server
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'CollectionWidget.bundle.js',
    library: 'CollectionWidget',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx','.ts','.tsx']
  }
};
