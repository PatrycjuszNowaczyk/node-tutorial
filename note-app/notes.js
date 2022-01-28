import chalk from 'chalk';
import fs from 'fs';

function pause(time) {
    let dt = new Date();
    while (new Date()) - dt <= time;
}
export class Notes {

    constructor() {

        do {
            try {
                this.notesRaw = fs.readFileSync('notes.json');
            } catch {
                fs.writeFileSync('notes.json', '{}');
            }

            try {
                this.notesJson = JSON.parse(this.notesRaw);
            } catch {
                fs.writeFileSync('notes.json', '{}');
                console.log(chalk.red('Database was corrupted. I\'ve created fresh database.'));
            }
        }
        while (this.notesJson == undefined)
        this.lastId = this.notesJson[Object.keys(this.notesJson).pop()]["id"];
    }

    add(note) {
        this.lastId++;
        this.notesJson["note-" + this.lastId] = {
            "id": this.lastId,
            "note": note
        };
        fs.writeFileSync('notes.json', JSON.stringify(this.notesJson, null, 4));
        console.clear();
        console.log(chalk.green('Your note has beed added.'));
        setTimeout(() => {
            console.clear();
        }, 2000);
    }
    remove(noteId) {
        delete this.notesJson["note-" + noteId];
        fs.writeFileSync('notes.json', JSON.stringify(this.notesJson, null, 4));
        console.log(this.notesJson);
    }
    clear() {
        console.log('cleaning all notes')
    }
    list() {
        console.log('listing all notes')
    }
    stats() {
        console.log('show how many notes have been created since the beginning')
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
        console.log(`${chalk.cyan('stats')} to show how many note have been created since the beginning`);
        console.log();
        console.log(`${chalk.cyan('help')} to see this help recursion(recursion) ;-)`);
        console.log('................................................................')
        console.log();
    }
}