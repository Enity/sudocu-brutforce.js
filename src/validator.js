export class Validator {
    static validateSudocu(Sudocu) {
        if (!Validator.validateRows(Sudocu)) return false;
        if (!Validator.validateColumns(Sudocu)) return false;
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

    static validateField(Sudocu, x, y, value) {
        const [ row, col ] = Sudocu.getFieldPos(x, y);
        if (!Validator.checkFieldNotExists(value, row)) return false;
        if (!Validator.checkFieldNotExists(value, col)) return false;
        return true;
    }

    /**
     * @param {Number[]} arr
     */
    static validateArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) continue;
            if (!Validator.checkFieldIsUnique(arr[i], arr)) return false;
        }
        return true;
    }

    static checkFieldIsUnique(value, arr) {
        return arr.indexOf(value) === arr.lastIndexOf(value);
    }

    static checkFieldNotExists(value, arr) {
        return arr.indexOf(value) === -1;
    }
}
