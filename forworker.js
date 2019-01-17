const {
    parentPort,
    workerData
} = require('worker_threads');


const data = workerData;
let i = 0;

for (;i < data; i++) { }

parentPort.postMessage(i);