/**
 * Dependencies
 */
var express = require("express");

/**
 * Config
 */
var config = require("./config");

/**
 * Server
 */
var app = module.exports = express();

require("./server")(app, config);

// Start app
if (!module.parent) {
 app.listen(config.app.port);
 console.log("Server started, listening on port: " + config.app.port);
}
console.log("Environment: " + config.app.env);