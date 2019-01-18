import { Sudocu } from './sudocu';
import { Validator } from './validator';
import { Random } from './random';

export function brut() {
    const sud = new Sudocu();
    const random = new Random(1, 9);

    sud.iterate((x, y, backtrack) => {
        let newValue;

        do {
            newValue = random.getNew();
            if (newValue !== false) {
                newValue = random.getNew();
            } else {
                random.clear();
                const [ newx, newy ] = backtrack();
                x = newx;
                y = newy;
            }
        } while (!Validator.validateField(sud, x, y, newValue));

        random.clear();
        sud.set(x, y, newValue);
    });

    return sud;
}
