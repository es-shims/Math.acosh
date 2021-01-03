'use strict';

var EPSILON = 2.220446049250313e-16; // Number.EPSILON

var withinULPDistance = function withinULPDistance(result, expected) {
	return Math.abs(1 - (result / expected)) < 8 * EPSILON;
};

var almostEqual = function (actual, expected) {
	var precision = 1e-11;
	return actual - expected < precision && expected - actual < precision;
};

module.exports = function (acosh, t) {
	t.test('Math.acosh', function (st) {
		st.equal(acosh(NaN), NaN, 'acosh(NaN)');
		st.equal(acosh(0), NaN, 'acosh(0)');
		st.equal(acosh(0.9999999), NaN, 'acosh(0.9999999)');
		st.equal(acosh(-1e300), NaN, 'acosh(-1e300)');
		st.ok(almostEqual(acosh(1e+99), 228.64907138697046), 'acosh(1e+99)');
		st.equal(acosh(1), +0, 'acosh(1)');
		st.equal(acosh(Infinity), Infinity, 'acosh(Infinity)');
		st.ok(almostEqual(acosh(1234), 7.811163220849231), 'acosh(1234)');
		st.ok(almostEqual(acosh(8.88), 2.8737631531629235), 'acosh(8.88)');
		st.ok(almostEqual(acosh(1e160), 369.10676205960726), 'acosh(1e160)');
		st.ok(almostEqual(acosh(Number.MAX_VALUE), 710.4758600739439), 'acosh(Number.MAX_VALUE)');

		st.end();
	});

	t.test('works for EPSILON values near 1', function (st) {
		var result = acosh(1 + EPSILON);
		var expected = Math.sqrt(2 * EPSILON);

		console.log(result, expected);

		st.ok(almostEqual(result, expected));
		st.ok(withinULPDistance(result, expected));

		st.end();
	});
};
