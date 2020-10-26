const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  module: {
    rules: [
      {
        test: /^.*\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /^.*\.jsx?$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]]
            }
          }
        ]
      }
    ]
  }
};
