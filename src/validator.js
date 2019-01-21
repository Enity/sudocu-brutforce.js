export class Validator {
    static validateSudocu(Sudocu) {
        if (!Validator.validateRows(Sudocu)) return false;
        if (!Validator.validateColumns(Sudocu)) return false;
        if (!Validator.validateSquares(Sudocu)) return false;
        return true;
    }

    static validateRows(Sudocu) {
        const rows = Sudocu.getRows();
        for (let i = 0; i < rows.length; i++) {
            if (!Validator.validateArray(rows[i])) return false;
        }
        return true;
    }

    static validateColumns(Sudocu) {
        const cols = Sudocu.getColumns();
        for (let i = 0; i < cols.length; i++) {
            if (!Validator.validateArray(cols[i])) return false;
        }
        return true;
    }

    static validateSquares(Sudocu) {
        const squares = Sudocu.getSquares();
        for (let i = 0; i < squares.length; i++) {
            if (!Validator.validateArray(squares[i])) return false;
        }
        return true;
    }

    static validateField(Sudocu, i, value) {
        const [ rowInd, colInd, squareInd ] = Sudocu.getFieldIndexes(i);
        if (!Validator.checkFieldNotExists(value, rowInd, Sudocu.map)) return false;
        if (!Validator.checkFieldNotExists(value, colInd, Sudocu.map)) return false;
        if (!Validator.checkFieldNotExists(value, squareInd, Sudocu.map)) return false;
        return true;
    }

    /**
     * @param {Number[]} arr
     */
    static validateArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) continue;
            if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) return false;
        }
        return true;
    }

    static checkFieldNotExists(value, indexesArr, arr) {
        for (let i = 0; i < indexesArr.length; i++) {
            if (arr[indexesArr[i]] === value) return false;
        }
        return true;
    }
}
