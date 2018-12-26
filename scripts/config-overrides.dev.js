const customizeLoaders = require('./customize-loaders');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = function (config) {
  customizeLoaders(config.module.rules);
  addCircularDependencyPlugin(config.plugins);
};

function addCircularDependencyPlugin(plugins) {
  plugins.push(
    new CircularDependencyPlugin({
      failOnError: true,
      exclude: /node_modules/,
      cwd: process.cwd(),
    })
  );
}
