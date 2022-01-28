import { Notes } from './notes.js';
import readline from 'readline';

const oNotes = new Notes();
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

oNotes.help();

rl.on('line', function(line) {
    switch (rl.history[0]) {
        case 'add':
            // console.log('Type your note:');
            // rl.on('line', () => {
            //     oNotes.add(rl.history[0]);
            // })
            // rl.resume();
            console.clear();
            rl.question('Type your note:', (note) => {
                oNotes.add(note);
            })
            rl.clearLine();
            break;
        case 'remove':
            rl.question('Write ID of note you want to remove:', (noteId) => {
                oNotes.remove(noteId);
            });
            break;
        case 'clear':
            oNotes.clear();
            break;
        case 'list':
            oNotes.list();
            break;
        case 'stats':
            oNotes.stats();
            break;
        case 'help':
            oNotes.help();
            break;
        case 'exit':
            rl.close();
            break;
        default:
            console.log('Invalid input, type help to see commands.');
            break;
    }
})