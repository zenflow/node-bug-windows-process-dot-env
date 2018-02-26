const assert = require('assert')

const values = []

values.push(process.env.foo)

process.env.foo = ''

process.env.bar = process.env.foo

values.push(process.env.foo)

assert.deepEqual(values, [undefined, ''])
