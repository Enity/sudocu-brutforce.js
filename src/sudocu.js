export class Sudocu {
    constructor() {
        this.map = Array(91).fill(0);
        this.sideLength = 9;
    }

    set(i, value) {
        this.map[i] = value;
    }

    backtrack(i) {
        let newPos = i - 18;
        if (newPos < 0) newPos = 0;
        for (let b = newPos; b < i; b++) {
            this.set(b, 0);
        }
        return newPos;
    }

    iterate(fn) {
        for (let i = 0; i < this.map.length; i++) {
            fn(i, () => {
                let newPos = this.backtrack(i);
                i = newPos;
                return newPos;
            });
            
        }
    }

    print() {
        const rows = this.getRows();

        for (let y = 0; y < rows.length; y++) {
            for (let x = 0; x < rows[y].length; x++) {
                process.stdout.write(`${rows[y][x]} `);
            }
            process.stdout.write('\n');
        }
    }

    getFieldPos(i) {
        const col = new Array(this.sideLength);
        let pos = i % this.sideLength;
        for (let b = 0; b < this.sideLength; b++) {
            col[b] = this.map[pos];
            pos += this.sideLength;
        }
        const xpos = Math.floor(i / this.sideLength) * this.sideLength;
        return [
            this.map.slice(xpos, xpos + this.sideLength), // row
            col, // col
            undefined // TODO square
        ];
    }

    getRows() {
        const rows = new Array(this.sideLength);

        let pos = 0;
        for (let i = 0; i < this.sideLength; i++) {
            rows[i] = this.map.slice(pos, pos + this.sideLength);
            pos += this.sideLength;
        }
        return rows;
    }

    getColumns() {
        const cols = Array.from({ length: this.sideLength }, () => new Array(this.sideLength));
        
        let x = 0;
        for (let i = 0; i < this.map.length; i++) {
            if (x === this.sideLength) x = 0;
            cols[i % this.sideLength][x] = this.map[i];
            x++;
        }

        return cols;
    }

    _calculateIndexesMap() {
        this.iterate((x, y) => {
            
        });
    }
}