const { performance } = require('perf_hooks');
const { brut } = require('./src/index');

const TRYES = 1000;
const start = performance.now();

async function startPerf() {
    for (let i = 0; i < TRYES; i++) {
        await brut();
    }
}

startPerf();

console.log(`finished ${TRYES} in ${performance.now() - start}`);
