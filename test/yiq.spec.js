const test = require('japa')
const yiq = require('../index')

test('Should return `#fff` when `#000` and `#000000` is given', (assert) => {
  assert.strictEqual(yiq('#000'), '#fff')
  assert.strictEqual(yiq('#000000'), '#fff')
})

test('Should return `#fff` when `#356` and `#335566` is given', (assert) => {
  assert.strictEqual(yiq('#356'), '#fff')
  assert.strictEqual(yiq('#335566'), '#fff')
})

test('Should return `#000` when `#fff` and `#ffffff` is given', (assert) => {
  assert.strictEqual(yiq('#fff'), '#000')
  assert.strictEqual(yiq('#ffffff'), '#000')
})

test('Should return `#000` when `#2f5` and `#22ff55` is given', (assert) => {
  assert.strictEqual(yiq('#2f5'), '#000')
  assert.strictEqual(yiq('#22ff55'), '#000')
})

test('Should return the options colors.', (assert) => {
  const options = {
    white: '#f0f0f0',
    dark: '#333'
  }

  assert.strictEqual(yiq('#356', options), '#f0f0f0')
  assert.strictEqual(yiq('#335566', options), '#f0f0f0')

  assert.strictEqual(yiq('#2f5', options), '#333')
  assert.strictEqual(yiq('#22ff55', options), '#333')
})
