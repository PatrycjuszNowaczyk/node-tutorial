import chalk from 'chalk';
import fs from 'fs';

export class Notes {
    constructor() {
        fs.open('notes.json', 'r', (err) => {
            if (err) {
                fs.writeFileSync('notes.json', '');
                console.log(chalk.green('Welcome in Notes-app.'));
                console.log(chalk.cyan('Notes-app has created database to store your notes.'));
                this.help();
            } else {
                console.log(chalk.green('Welcome in Notes-app.'));
                this.help();
            }
        })
    }

    add() {
        console.log('adding new note');
    }
    remove() {
        console.log('removing specified note')
    }
    clear() {
        console.log('cleaning all notes')
    }
    list() {
        console.log('listing all notes')
    }
    help() {
        console.log('.............................................................')
        console.log('Type one of blue listed commands to perform desirable action:');
        console.log('.............................................................')
        console.log();
        console.log(`${chalk.cyan('add')} to add your note`);
        console.log();
        console.log(`${chalk.cyan('remove')} to remove one of your notes`);
        console.log();
        console.log(`${chalk.cyan('clear')} to remove all of your notes`);
        console.log();
        console.log(`${chalk.cyan('list')} to list all your notes`);
        console.log();
        console.log(`${chalk.cyan('help')} to see this help recursion(recursion) ;-)`);
        console.log('................................................................')
        console.log();
    }
}