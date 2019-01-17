import { Sudocu } from './sudocu';
import { Validator } from './validator';
import { random } from './random';

export function brut() {
    const sud = new Sudocu();

    sud.iterate((x, y) => {
        let newValue;
        do {
            newValue = random(1, 9);
            sud.set(x, y, newValue);
        } while (!Validator.validateField(sud, x, y, newValue));
    });

    return sud;
}
