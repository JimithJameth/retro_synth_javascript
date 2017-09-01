var config = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;