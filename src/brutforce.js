import { Sudocu } from './sudocu';
import { Validator } from './validator';
import { random } from './random';

export function brut() {
    const sud = new Sudocu();
    sud.iterate((x, y, backtrack) => {
        let newValue;
        let count = 0;
        do {
            newValue = random(1, 9);
            count++;
            if (count > 1000) {
                const [ newx, newy ] = backtrack();
                x = newx;
                y = newy;
                count = 0;
            }
        } while (!Validator.validateField(sud, x, y, newValue));
        sud.set(x, y, newValue);
    });

    return sud;
}
