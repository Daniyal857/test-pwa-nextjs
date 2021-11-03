const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
require('webpack');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching
  }
});
