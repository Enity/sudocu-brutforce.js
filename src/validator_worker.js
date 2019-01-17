const {
    parentPort,
    workerData
} = require('worker_threads');

import { Validator } from './validator';

const row = workerData;

const res = Validator.validateArray(row);

if (res === true) {
    parentPort.postMessage(res);
} else {
    throw new Error();
}

