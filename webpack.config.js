const absolute = relPath => require("path").join(__dirname, relPath);
module.exports = {
  entry: absolute("src/main.js"),
  output: {
    path: absolute("www"),
    filename: "main.bundle.js"
  },
  module: {loaders: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]},
  devtool: "sourcemaps"
};
