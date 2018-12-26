const customizeLoaders = require('./customize-loaders');

module.exports = function (config) {
  customizeLoaders(config.module.rules);
};
