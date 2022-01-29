import { Notes } from './notes.js';
import readline from 'readline';
import chalk from 'chalk';
const oNotes = new Notes();
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

oNotes.help();

rl.on('line', function (line) {
    switch (rl.history[0]) {
        case 'add':
            console.clear();
            rl.question('Type your note:', (note) => {
                oNotes.add(note);
            })
            rl.clearLine();
            break;
        case 'remove':
            if (oNotes.isNote()) {
                rl.question('Write ID of note you want to remove: ', (noteId) => {
                    oNotes.remove(noteId);
                });
            }
            else {
                console.log(chalk.yellow('There are any notes left.'))
            }
            break;
        case 'clear':
            if (oNotes.isNote()) {
                oNotes.clear();
            }
            else {
                console.log(chalk.yellow('There are any notes left.'))
            }
            break;
        case 'list':
            if (oNotes.isNote()) {
                oNotes.list();
            }
            else {
                console.log(chalk.yellow('There are any notes left.'))
            }
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