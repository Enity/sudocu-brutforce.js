import { strictEqual as equal } from 'assert';
import { Validator } from '../src/validator';
import { Sudocu } from '../src/sudocu';

describe('Sudocu class tests', () => {
    describe('validateArray method', () => {
        it('should return true if all digits is unique', () => {
            equal(Validator.validateArray([1, 2, 3, 4, 5, 6, 7, 8, 9]), true);
        });
        it('should return false if not unique exists', () => {
            equal(Validator.validateArray([1, 4, 3, 4, 5, 6, 7, 8, 9]), false);
        });
        it('should return true if all digits unique but not 0', () => {
            equal(Validator.validateArray([1, 2, 0, 4, 5, 0, 7, 0, 0]), true);
        });
    });

    describe('validateSoducu method', () => {
        it('should return true if sudocu is clear', () => {
            const res = Validator.validateSudocu(
                new Sudocu()
            );
            equal(res, true);
        });

    });
});
