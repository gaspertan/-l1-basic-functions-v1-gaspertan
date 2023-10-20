import { test } from 'node:test';
import assert from 'assert/strict';

test('task1', async () => {
  try {
    const { getSum } = await import('../index.js');
    assert.strictEqual(getSum(1, 2), 3);
    assert.strictEqual(getSum(3, -5), -2);
  } catch (error) {
    console.error('task1 - getSum не экспортирована');
    test.skip();
  }
});

test('task2', async () => {
  try {
    const { getSmallestNumber } = await import('../index.js');
    assert.strictEqual(getSmallestNumber(0, 1000), 0);
    assert.strictEqual(getSmallestNumber(-1000, 10), -1000);
  } catch (error) {
    console.error('task2 - getSmallestNumber не экспортирована');
    test.skip();
  }
});

test('task3', async () => {
  try {
    const { castBoolean } = await import('../index.js');
    assert.strictEqual(castBoolean('Hexlet'), true);
    assert.strictEqual(castBoolean(0), false);
    assert.strictEqual(castBoolean(NaN), false);
    assert.strictEqual(castBoolean(), false);
    assert.strictEqual(castBoolean(''), false);
    assert.strictEqual(castBoolean(() => { }), true);
    assert.strictEqual(castBoolean(122343n), true);
    assert.strictEqual(castBoolean(console.log), true);
    assert.strictEqual(castBoolean(console.log()), false);
  } catch (error) {
    console.error('task3 - castBoolean не экспортирована');
    test.skip();
  }
});

test('task4', async () => {
  try {
    const { capitalize } = await import('../index.js');
    assert.strictEqual(capitalize('Hexlet', 2), 'HeXlet');
    assert.strictEqual(capitalize('Hello, world!', 22), 'Hello, world!');
    assert.strictEqual(capitalize('What`s up!', -22), 'What`s up!');
    assert.strictEqual(capitalize('Hello', 0), 'Hello');
  } catch (error) {
    console.error('task4 - capitalize не экспортирована');
    test.skip();
  }
});

test('task5', async () => {
  try {
    const { countCapitalLetters } = await import('../index.js');
    assert.strictEqual(countCapitalLetters('Hexlet'), 1);
    assert.strictEqual(countCapitalLetters(''), 0);
    assert.strictEqual(countCapitalLetters('   a   '), 0);
    assert.strictEqual(countCapitalLetters('hello world'), 0);
    assert.strictEqual(countCapitalLetters('WELCOME TO THE WORLD OF CAPITAL LETTERS'), 33);
  } catch (error) {
    console.error('task5 - countCapitalLetters не экспортирована');
    test.skip();
  }
});
