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

    iterate(fn) {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                fn(x, y);
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

    getFieldPos(x, y) {
        return {
            row: this.map[y],
            col: undefined, // TODO
            square: undefined // TODO
        };
    }

    getRows() {
        return this.map;
    }
}