import { deepEqual } from 'assert';
import { Sudocu } from '../src/sudocu';

describe('Sudocu class tests', () => {
    let instance;

    beforeEach(() => {
        instance = new Sudocu();
    });

    describe('getColumns method', () => {
        it('should return correct cols', () => {
            instance.map = [
                1,2,3,4,5,6,7,8,9,
                2,5,6,4,8,1,2,3,8,
                3,0,0,0,0,0,0,0,7,
                4,0,0,0,0,0,0,0,6,
                5,0,0,0,0,0,0,0,5,
                6,0,0,0,0,0,0,0,4,
                7,0,0,0,0,0,0,0,3,
                8,0,0,0,0,0,0,0,2,
                9,0,0,0,0,0,0,0,1,
            ];
            const res = instance.getColumns();

            deepEqual(res[0], [1,2,3,4,5,6,7,8,9]);
            deepEqual(res[8], [9,8,7,6,5,4,3,2,1]);
        });
    });

    describe('getSquares method', () => {
        it('should return correct squares', () => {
            instance.map = [
                1,2,3,9,9,6,9,8,9,
                4,5,6,9,9,1,9,3,8,
                7,8,9,0,0,0,0,0,7,
                4,0,0,0,0,0,0,0,6,
                5,0,0,0,0,0,0,0,5,
                6,0,0,0,0,0,0,0,4,
                7,0,0,0,0,0,4,5,6,
                8,0,0,0,0,0,1,2,3,
                9,0,0,0,0,0,8,9,7,
            ];
            const res = instance.getSquares();

            deepEqual(res[0], [1,2,3,4,5,6,7,8,9]);
            deepEqual(res[8], [4,5,6,1,2,3,8,9,7]);
        });
    });
});
