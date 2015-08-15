var path = require('path');
var _ = require('lodash');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var base = {
  app: {
    root: path.normalize(path.join(__dirname, '/..')),
    env: env,
  },
};

var specific = {
  development: {
    app: {
      port: 1337
    }
  }
};

module.exports = _.merge(base, specific[env]);