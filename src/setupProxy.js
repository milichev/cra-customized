/**
 * setupProxy module contains declarations of Webpack Development Server proxies.
 * It is loaded by Create-React-App, the file name and location is conventional.
 */

// @ts-ignore
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy(
    '/sc/ws/rest/ui',
    {
      target: 'http://localhost:8080',
      logLevel: 'debug',
    }));
};
