import { Notes } from './notes.js';
import readline from 'readline';

const oNotes = new Notes();
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

rl.on('line', function(line) {

    switch (rl.history[0]) {
        case 'add':
            oNotes.add();
            break;
        case 'remove':
            oNotes.remove();
            break;
        case 'clear':
            oNotes.clear();
            break;
        case 'list':
            oNotes.list();
            break;
        case 'help':
            oNotes.help();
            break;
        case 'exit':
            rl.close();
            break;
    }

})