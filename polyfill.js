'use strict';

var implementation = require('./implementation');

var abs = Math.abs;
var EPSILON = 2.220446049250313e-16; // Number.EPSILON

var withinULPDistance = function withinULPDistance(result, expected) {
	// eslint-disable-next-line no-magic-numbers
	return abs(1 - (result / expected)) < 8 * EPSILON;
};

module.exports = function getPolyfill() {
	var orig = Math.acosh;
	if (
		!orig
		// Chrome 40 loses Math.acosh precision with high numbers
		|| orig(Number.MAX_VALUE) === Infinity
		// Chrome < 54 has an inaccurate acosh for EPSILON deltas
		|| withinULPDistance(orig(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON))
	) {
		return implementation;
	}
	return orig;
};
