import { Sudocu } from './sudocu';
import { Validator } from './validator';
import { Random } from './random';

export function brut() {
    const sud = new Sudocu();
    const rand = new Random(1, 9);

    sud.iterate((x, y) => {
        let newValue;
        do {
            newValue = rand.getNew();
        } while (!Validator.validateField(sud, x, y, newValue));
        rand.clear();
        sud.set(x, y, newValue);
    });

    return sud;
}
