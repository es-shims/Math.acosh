'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathAcosh() {
	var polyfill = getPolyfill();
	define(
		Math,
		{ acosh: polyfill },
		{ acosh: function () { return Math.acosh !== polyfill; } }
	);
	return polyfill;
};
