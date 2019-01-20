export class Random {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this._i = 0;
        this._range = max - min + 1;
        this._cache = new Array(this._range);
    }

    getNew() {
        if (this._i === this._range) return false;
        let val;

        do {
            val = Random.generateRandom(this.min, this.max);
        } while (~this._cache.indexOf(val));

        this._cache[this._i] = val;
        this._i++;
        return val;
    }

    clear() {
        this._cache = [];
        this._i = 0;
    }

    static generateRandom(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }
}
