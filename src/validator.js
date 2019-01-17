export class Validator {
    static validateSudocu(Sudocu) {
        return Validator.validateRows(Sudocu);
    }

    static validateRows(Sudocu) {
        const rows = Sudocu.getRows();
        for (let i = 0; i < rows.length; i++) {
            if (!Validator.validateArray(rows[i])) return false;
        }
        return true;
    }

    static validateField(Sudocu, x, y, value) {
        const [ row ] = Sudocu.getFieldPos(x, y);
        return Validator.checkFieldNotExists(value, row);
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
