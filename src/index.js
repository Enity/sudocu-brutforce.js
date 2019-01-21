import { Sudocu } from './sudocu';
import { brut } from './brutforce';

function main() {
    const sud = new Sudocu();

    brut(sud);

    sud.print();
}

main();
