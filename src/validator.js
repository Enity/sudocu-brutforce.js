const {
    Worker,
} = require('worker_threads');

export class Validator {
    static async validateSudocu(Sudocu) {
        return Validator.validateRows(Sudocu);
    }

    static async validateRows(Sudocu) {
        const rows = Sudocu.getRows();
        try {
            const res = await Promise.all(
                rows.map(r => new Promise((resolve, reject) => {
                    const worker = new Worker('./validator_worker.js', {
                        workerData: r
                    });
                    worker.on('message', resolve);
                    worker.on('error', () => {
                        worker.terminate();
                        reject();
                    });
                })));
            return true;
        } catch (e) {
            return false;
        }
    }
    /**
     * @param {Number[]} arr 
     */
    static validateArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) continue;
            if (arr.lastIndexOf(arr[i]) !== i) return false;
        }
        return true;
    }
}