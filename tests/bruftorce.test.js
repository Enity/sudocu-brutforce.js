import { strictEqual as equal } from 'assert';
import { Sudocu } from '../src/sudocu';
import { Validator } from '../src/validator';
import { brut } from '../src/brutforce';

describe('Bruforce tests', () => {
    it('should return a valid sudocu', () => { // TODO
        const sud = new Sudocu();
        brut(sud);
        const res = Validator.validateSudocu(sud);
        equal(res, true);
    });
});
