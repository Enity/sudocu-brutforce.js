import { Validator } from './validator';
import { Random } from './random';

export function brut(sudocu) {
    const random = new Random(1, 9);

    sudocu.iterate((pos, backtrack) => {
        let newValue;

        do {
            newValue = random.getNew();
            if (newValue === false) {
                random.clear();
                newValue = random.getNew();
                pos = backtrack();
            }
        } while (!Validator.validateField(sudocu, pos, newValue));

        random.clear();
        sudocu.set(pos, newValue);
    });

    return true;
}
