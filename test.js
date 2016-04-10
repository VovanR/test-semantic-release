import test from 'ava';
import fn from './';

test('is function', t => {
	t.is(typeof fn, 'function');
});

test('should return sum of args', t => {
	t.is(fn(1, 2), 3);
});

test('should return sum of all args', t => {
	t.is(fn(1, 2, 3, 4), 10);
});
