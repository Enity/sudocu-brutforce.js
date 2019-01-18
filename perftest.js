const { performance } = require('perf_hooks');
const { brut } = require('./src/brutforce');

function startPerf() {
    const results = [ 1, 100, 1000 ].map(tries => {
        return {
            title: `Tries: ${tries}`,
            body: round(tries, brut).toString(),
        };
    });

    printTable(results);
}

function round(tries, fn) {
    const start = performance.now();
    for (let i = 0; i < tries; i++) {
        fn();
    }

    return performance.now() - start;
}

function printTable(results = []) {
    results.forEach(row => {
        console.log(`${row.title.padEnd(15)} |  ${row.body}`);
    });
}

startPerf();

