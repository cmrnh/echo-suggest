var express = require('express');

module.exports = function (app, config) {
	// Route handling and middleware should go here
	app.use(express.static('build'));
};