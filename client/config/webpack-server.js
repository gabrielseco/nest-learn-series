const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  stats: {
    colors: true,
    hash: false,
    version: true,
    timings: true,
    assets: true,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false
  }
}).listen(8000, 3000, err => {
  if (err) {
    return console.log(err);
  }

  console.log(`Listening at http://locahost:3000/`);
});
