import acosh, * as acoshModule from 'math.acosh';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(acosh, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(acoshModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = acoshModule;
	t.equal(await import('math.acosh/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('math.acosh/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('math.acosh/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
