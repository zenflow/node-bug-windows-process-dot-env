# node-bug-windows-process-dot-env
Reproduction repo for a bug in NodeJS

## Status

| Operating System | CI Service | Status |
| --- | --- | --- |
| Linux | Travis | [![Build Status](https://travis-ci.org/zenflow/node-bug-windows-process-dot-env.svg?branch=master)](https://travis-ci.org/zenflow/node-bug-windows-process-dot-env) |
| Windows | AppVeyor | [![Build Status](https://ci.appveyor.com/api/projects/status/k8l9iuu984u076dr?svg=true)](https://ci.appveyor.com/project/zenflow/node-bug-windows-process-dot-env) |

## Description

After being assigned the value of `''`, the value of `process.env.foo` can sometimes be observed to be `undefined`.

This seems to only happen in Windows environments.

It also happens rather unpredictibly (yet consistently). There are two tests in the tests dir: `symptom.js` and `no-symptom.js`. `symptom.js` will show the symptom on Windows and `no-symptom.js` will not. But look how similar the two tests are, and how the difference would not be expected to change the outcome.

## Links

- [`symptom.js`](./tests/symptom.js)
- [`no-symptom.js`](./tests/no-symptom.js)
- [Travis Build Logs](https://travis-ci.org/zenflow/node-bug-windows-process-dot-env)
- [AppVeyor Build Logs](https://ci.appveyor.com/project/zenflow/node-bug-windows-process-dot-env/branch/master)
