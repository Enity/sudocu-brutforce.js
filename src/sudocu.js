export class Sudocu {
    constructor() {
        this.map = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
        ];
    }

    set(x, y, value) {
        this.map[y][x] = value;
    }

    async iterate(fn) {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                await fn(x, y, this.map[y][x]);
            }
        }
    }

    print() {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                process.stdout.write(`${this.map[y][x]} `);
            }
            process.stdout.write('\n');
        }
    }

    getRows() {
        return this.map;
    }
}