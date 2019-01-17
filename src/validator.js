export class Validator {
    static validateSudocu(Sudocu) {
        return Validator.validateRows(Sudocu);
    }

    static validateField(Sudocu, x, y) {
        const row = Sudocu.getRow(x, y);
        return Validator.validateArray(row);
    }

    static validateRows(Sudocu) {
        const rows = Sudocu.getRows();
        for (let i = 0; i < rows.length; i++) {
            if (!Validator.validateArray(rows[i])) return false;
        }
        return true;
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