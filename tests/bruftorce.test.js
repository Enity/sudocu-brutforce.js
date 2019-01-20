import { strictEqual as equal } from 'assert';
import { Validator } from '../src/validator';
import { brut } from '../src/brutforce';

describe('Bruforce tests', () => {
    it('should return a valid sudocu', () => { // TODO
        const sudocu = brut();
        const res = Validator.validateSudocu(sudocu);
        equal(res, true);
    });
});
