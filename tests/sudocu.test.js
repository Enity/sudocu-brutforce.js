import { strictEqual as equal } from 'assert';
import { Sudocu } from '../src/sudocu';

describe('Sudocu class tests', () => {
    let instance;

    beforeEach(() => {
        instance = new Sudocu();
    });

    describe('getColumns method', () => {
        it('should return correct cols', () => {
            instance.map = [
                [1,0,0,0,0,0,0,0,9],
                [2,0,0,0,0,0,0,0,8],
                [3,0,0,0,0,0,0,0,7],
                [4,0,0,0,0,0,0,0,6],
                [5,0,0,0,0,0,0,0,5],
                [6,0,0,0,0,0,0,0,4],
                [7,0,0,0,0,0,0,0,3],
                [8,0,0,0,0,0,0,0,2],
                [9,0,0,0,0,0,0,0,1],
            ];
            const res = instance.getColumns();

            equal(res[0][0], 1);
            equal(res[0][8], 9);
            equal(res[8][0], 9);
            equal(res[8][8], 1);
        });
    });
});
