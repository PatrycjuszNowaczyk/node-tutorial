import chalk from 'chalk';
import fs from 'fs';

export class Notes {

    constructor() {

        do {
            if (!this.notesRaw) {
                console.log('get the file data');
                try {
                    this.notesRaw = fs.readFileSync('notes.json');
                } catch {
                    fs.writeFileSync('notes.json', '{ "lastId": 0 }');
                    this.notesRaw = fs.readFileSync('notes.json');
                }
            }

            try {
                console.log('convert file data to json');
                this.notesJson = JSON.parse(this.notesRaw);
            } catch {
                this.notesJson = { "lastId": 0 };
                fs.writeFileSync('notes.json', JSON.stringify(this.notesJson));
                console.log(chalk.red('Database was corrupted. I\'ve created fresh database.'));
            }
        }
        while (this.notesJson == undefined)
    }

    //METHODS
    //------------------------------------------------
    add(note) {
        this.notesJson.lastId++;
        this.notesJson["note-" + this.notesJson.lastId] = {
            "id": this.notesJson.lastId,
            "note": note
        };
        fs.writeFileSync('notes.json', JSON.stringify(this.notesJson, null, 4));
        console.clear();
        console.log(chalk.green('Your note has beed added.'));
        setTimeout(() => {
            console.clear();
        }, 2000);
    }

    //------------------------------------------------
    remove(noteId) {
        if (Object.keys(this.notesJson).length > 0) {
            delete this.notesJson["note-" + noteId];
            fs.writeFileSync('notes.json', JSON.stringify(this.notesJson, null, 4));
        } else {
            console.log(chalk.yellow('There nothing left to remove.'))
        }
    }

    //------------------------------------------------
    clear() {
        fs.writeFileSync('notes.json', '{}');
        this.notesJson = {};
        console.clear();
        console.log(chalk.green('Success. Cleared all notes.'));
    }

    //------------------------------------------------
    list() {
        console.clear();
        let i = 1;
        console.log(chalk.cyan("all your notes:"));
        console.log(`nr.  #ID  Example note content`);
        for (let key in this.notesJson) {
            if (key.split('-')[0] == "note") {
                console.log(`${i}.  #${this.notesJson[key]["id"]}  ${this.notesJson[key]["note"]}`);
                i++;
            }
        }
        if (Object.keys(this.notesJson).length == 1) {
            console.log(chalk.yellow('There are any notes here.'));
        }
        console.log('................................................................');
        console.log();
    }

    //------------------------------------------------
    stats() {
        console.log('show how many notes have been created since the beginning')
    }

    //------------------------------------------------
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

    //------------------------------------------------
    isNote() {
        if (Object.keys(this.notesJson).length > 0) {
            return true;
        } else {
            return false;
        }
    }
}