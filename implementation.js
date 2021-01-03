'use strict';

var log1p = require('math.log1p');
var isNaN = require('is-nan');

var sqrt = Math.sqrt;
var LOG2E = Math.LOG2E;
var $Number = Number;

module.exports = function acosh(value) {
	var x = $Number(value);
	if (isNaN(x) || value < 1) {
		return NaN;
	}
	if (x === 1) {
		return 0;
	}
	if (x === Infinity) {
		return x;
	}

	var xInvSquared = 1 / (x * x);
	if (x < 2) {
		return log1p(x - 1 + (sqrt(1 - xInvSquared) * x));
	}
	var halfX = x / 2;
	return log1p(halfX + (sqrt(1 - xInvSquared) * halfX) - 1) + (1 / LOG2E);
};
