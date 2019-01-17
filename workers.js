const {
    Worker,
} = require('worker_threads');
const { performance } = require('perf_hooks');

async function start() {
    const start = performance.now();
    const res = await Promise.all([1, 1, 1, 1].map(() => {
        return operation();
    }));

    console.log(res);
    console.log('WORKER', performance.now() - start);

    const start2 = performance.now();

    for (let index = 0; index < 4; index++) {
        startNormal();
    }

    console.log('NORMAL', performance.now() - start2);
}

function startNormal() {
    const data = 2147483647;
    let i = 0;

    for (;i < data; i++) { }
    return i;
}

function operation() {
    const max = 2147483647;
    return new Promise((resolve) => {
        const worker = new Worker('./forworker.js', {
            workerData: max
        });
        worker.on('message', data => {
            resolve(data);
        });
    });
}

start();