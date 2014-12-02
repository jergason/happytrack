module.exports = {
  entry: './client/index.jsx',

  output: {
    path: './client/build/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: '6to5-loader' },
    ]
  }
};
