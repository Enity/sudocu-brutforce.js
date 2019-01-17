import { Sudocu } from './sudocu';
import { Validator } from './validator';
import { random } from './random';

export function brut() {
    const sud = new Sudocu();

    sud.iterate((x, y, value) => {
        do {
            sud.set(x, y, random(1, 9));
        } while (!Validator.validateField(sud, x, y));
    });

    return sud;
}
