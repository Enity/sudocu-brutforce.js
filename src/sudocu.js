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

    backtrack(x, y) {
        for (let ystart = y; ystart > Math.abs(y - 1); ystart--) {
            for (let xstart = 0; xstart < 9; xstart++) {
                this.set(xstart, ystart, 0);
            }
        }
        return [
            0, // x
            Math.abs(y - 1) // y
        ];
    }

    iterate(fn) {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                fn(x, y, () => {
                    const [newx, newy] = this.backtrack(x, y);
                    x = newx;
                    y = newy;
                    return [newx, newy];
                });
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
        const col = new Array(this.map.length);
        for (let i = 0; i < this.map.length; i++) {
            col[i] = this.map[i][x];
        }
        return [
            this.map[y], // row
            col, // TODO col
            undefined // TODO square
        ];
    }

    getRows() {
        return this.map;
    }

    getColumns() {
        const sideLength = this.map.length;
        const cols = Array.from({ length: sideLength }, () => new Array(sideLength));
        
        for (let y = 0; y < sideLength; y++) {
            for (let x = 0; x < sideLength; x++) {
                cols[x][y] = this.map[y][x];
            }
        }

        return cols;
    }
}