import { deepEqual, throws } from 'assert';
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

        it('Should throw error on 10th call', () => {
            instance = new Random(1, 9);
            throws(() => {
                for (let i = 0; i < 10; i++) {
                    Random.getNew();
                }
            });
        });
    });
});