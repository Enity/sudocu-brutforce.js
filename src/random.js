export class Random {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.cache = [];
    }

    getNew() {
        if (this.cache.length === this.max) return false;
        let val;

        do {
            val = Random.generateRandom(this.min, this.max);
        } while (~this.cache.indexOf(val));

        this.cache.push(val);
        return val;
    }

    clear() {
        this.cache = [];
    }

    static generateRandom(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }
}
