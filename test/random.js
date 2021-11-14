#!/usr/bin/env node

const { jsUtil } = require('../js-util.js');

const log = console.log;

const test = (func, ...args) => {
	log({ func, args, result: jsUtil[func](...args) });
};

test('shuffleArr', [1, 2, 3, 4, 5, 6, 7, 8, 9]);

test('rand', 10, 100);

test('randInt', 0, 9);

test('seedRand', 3473904418, 0, 9999);

test('randTF');

test('randColor');

test('randFromArr', ['one', 9, 'fourteen', '1', 0, 'purple']);

test('chance', 90);

test('weightedChance', { two: 10, five: 80, green: 5, red: 4, diamond: 1 });
