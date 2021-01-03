'use strict';

var acosh = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(acosh, t);

	t.end();
});
