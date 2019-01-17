const { performance } = require('perf_hooks');
const { brut } = require('./src/brutforce');

function startPerf() {
    const TRYES = 10000;
    const start = performance.now();

    for (let i = 0; i < TRYES; i++) {
        brut();
    }

    console.log(`finished ${TRYES} in ${performance.now() - start}`);
}

startPerf();

