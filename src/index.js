import { Sudocu } from './sudocu';
import { Validator } from './validator';
import { random } from './random';

async function main() {
    await brut();
}

export async function brut() {
    const sud = new Sudocu();

    await sud.iterate(async(x, y, value) => {
        do {
            sud.set(x, y, random(1, 9));
        } while (await !Validator.validateSudocu(sud));
    });

    sud.print();
}

main();
