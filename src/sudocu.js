export class Sudocu {
    constructor() {
        this.map = Array(81).fill(0);
        this.sideLength = 9;
        this._indexesMap = this._calculateIndexesMap();
    }

    set(i, value) {
        this.map[i] = value;
    }

    backtrack(i) {
        let newPos = i - 8;
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

    getFieldIndexes(i) {
        return [
            this._indexesMap[i][0], // row indexes
            this._indexesMap[i][1] // col indexes
        ];
    }

    _calculateIndexesMap() {
        const map = {};

        for (let i = 0; i < this.map.length; i++) {
            // calculate row indexes
            const row = new Array(this.sideLength);
            const column = new Array(this.sideLength);
            let startPos;

            startPos = Math.floor(i / this.sideLength) * this.sideLength;
            for (let b = 0; b < this.sideLength; b++) {
                row[b] = startPos;
                startPos++;
            }

            // calculcate column indexes
            startPos = i % this.sideLength;
            for (let b = 0; b < this.sideLength; b++) {
                column[b] = startPos;
                startPos += this.sideLength;
            }

            map[i] = [row, column];
        }

        return map;
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

    // FOR FULL VALIDATION
    getRows() {
        const rows = new Array(this.sideLength);

        let pos = 0;
        for (let i = 0; i < this.sideLength; i++) {
            rows[i] = this.map.slice(pos, pos + this.sideLength);
            pos += this.sideLength;
        }
        return rows;
    }

    // FOR FULL VALIDATION
    getColumns() {
        const cols = Array.from(
            { length: this.sideLength },
            () => new Array(this.sideLength)
        );

        let x = 0;
        for (let i = 0; i < this.map.length; i++) {
            if (i !== 0 && i % this.sideLength === 0) x++;
            cols[i % this.sideLength][x] = this.map[i];
        }

        return cols;
    }
}
