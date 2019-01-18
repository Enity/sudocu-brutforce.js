import { 
    strictEqual as equal, notStrictEqual as notEqual,
    deepEqual }
    from 'assert';
import { Random } from '../src/random';

describe('Random class tests', () => {
    let instance;

    describe('getNew method', () => {
        it('Should return all digits', () => {
            instance = new Random(1, 9);
            const res = [];

            for (let i = 0; i < 9; i++) {
                res.push(instance.getNew());
            }

            deepEqual(res.sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        it('Should return false on 10th call', () => {
            instance = new Random(1, 9);
            for (let i = 0; i < 10; i++) {
                const res = instance.getNew();
                if (i === 9) {
                    equal(res, false);
                }
            }
        });

        it('Should not return false on 10th call after clear()', () => {
            instance = new Random(1, 9);
            for (let i = 0; i < 10; i++) {
                if (i === 9) instance.clear();
                const res = instance.getNew();
                if (i === 9) {
                    notEqual(res, false);
                }
            }
        });
    });
});