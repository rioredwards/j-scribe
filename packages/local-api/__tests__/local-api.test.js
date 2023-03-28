'use strict';

const localApi = require('..');
const assert = require('assert').strict;

assert.strictEqual(localApi(), 'Hello from localApi');
console.info('localApi tests passed');
