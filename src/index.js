import { Sudocu } from './sudocu';
import { Validator } from './validator';
import { random } from './random';

function main() {
    brut();
}

export function brut() {
    const sud = new Sudocu();

    sud.iterate((x, y, value) => {
        do {
            sud.set(x, y, random(1, 9));
        } while (!Validator.validateSudocu(sud));
    });
}

main();
