/*
  This module runs the scripts from react-scripts (Create React App)
  and gives an opportunity to override the Webpack config by creating
  "config-overrides.dev.js" and/or "config-overrides.prod.js" files in the
  current folder.

  A config-overrides file should export a single function that takes a
  config and modifies it as necessary.

  module.exports = function(webpackConfig) {
    webpackConfig.module.rules[0].use[0].options.useEslintrc = true;
  };
*/
var rewire = require('rewire');
var proxyquire = require('proxyquire');

switch (process.argv[2]) {
  case 'start':
    rewireModule(
      'react-scripts/scripts/start.js',
      loadCustomizer('./config-overrides.dev')
    );
    break;

  case 'build':
    rewireModule(
      'react-scripts/scripts/build.js',
      loadCustomizer('./config-overrides.prod')
    );
    break;

  case 'test':
    // Load customizations from the config-overrides.testing file.
    // That file should export a single function that takes a config and returns a config
    let customizer = loadCustomizer('../config-overrides.testing');
    proxyquire('react-scripts/scripts/test.js', {
      // When test.js asks for '../utils/createJestConfig' it will get this instead:
      '../utils/createJestConfig': (...args) => {
        // Use the existing createJestConfig function to create a config, then pass
        // it through the customizer
        var createJestConfig = require('react-scripts/utils/createJestConfig');
        return customizer(createJestConfig(...args));
      }
    });
    break;
  default:
    console.log('customized-config only supports "start", "build", and "test" options.');
    process.exit(-1);
}

function loadCustomizer(module) {
  try {
    return require(module);
  } catch (e) {
    console.error('Could not load such customizer', module, e);
    if (e.code !== "MODULE_NOT_FOUND") {
      throw e;
    }

    return config => config;
  }
}

function rewireModule(modulePath, customizer) {
  const defaults = rewire(modulePath);

  // the name of the top level variable in the modulePath holding the
  const configFactoryName = 'configFactory';
  const configFactory = defaults.__get__(configFactoryName);
  defaults.__set__(configFactoryName, proxy);

  function proxy() {
    const result = configFactory.apply(this, arguments);
    customizer(result);
    return result;
  }

}
