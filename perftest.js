const { performance } = require('perf_hooks');
const { brut } = require('./src/brutforce');

function startPerf() {
    const TRIES = 10000;
    const start = performance.now();

    for (let i = 0; i < TRIES; i++) {
        brut();
    }

    console.log(`finished ${TRIES} in ${performance.now() - start}`);
}

startPerf();

