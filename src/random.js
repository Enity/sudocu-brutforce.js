export class Random {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.cache = [];
    }

    getNew() {
        if (this.cache.size === this.max) 
            throw new Error('Reached max size of random cache. Clear cache before generate new value');
        let val;

        do {
            val = this._generateRandom();
        } while (this.cache.indexOf(val) !== -1);

        this.cache.push(val);
        return val;
    }

    clear() {
        this.cache = [];
    }

    _generateRandom() {
        var rand = this.min - 0.5 + Math.random() * (this.max - this.min + 1);
        rand = Math.round(rand);
        return rand;
    }
}
