var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8080", // WebpackDevServer host and port
    "webpack/hot/only-dev-server",
    "./app/app.js",
  ],
  devtool: process.env.WEBPACK_DEVTOOL || "source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "http://0.0.0.0:8080/",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015"],
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file",
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url?prefix=font/&limit=5000",
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream",
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml",
      },
      {
        test: /\.gif/,
        loader: "url-loader?limit=10000&mimetype=image/gif",
      },
      {
        test: /\.jpg/,
        loader: "url-loader?limit=10000&mimetype=image/jpg",
      },
      {
        test: /\.png/,
        loader: "url-loader?limit=10000&mimetype=image/png",
      },
    ],
  },
  devServer: {
    proxy: {
      "/*": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
    noInfo: true, //  --no-info option
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};
