import { Sudocu } from './sudocu';
import { Validator } from './validator';
import { Random } from './random';

export function brut() {
    const sud = new Sudocu();
    const random = new Random(1, 9);

    sud.iterate((pos, backtrack) => {
        let newValue;

        do {
            newValue = random.getNew();
            if (newValue === false) {
                random.clear();
                newValue = random.getNew();
                pos = backtrack();
            }
        } while (!Validator.validateFieldByIndexes(sud, pos, newValue));

        random.clear();
        sud.set(pos, newValue);
    });

    return sud;
}
