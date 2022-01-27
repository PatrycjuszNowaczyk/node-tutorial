import chalk from 'chalk';
import { Human, getNotes } from './notes.js';
const log = console.log;

let Patrycjusz = new Human('Patrycjusz');

log(chalk.red('Hello World!!!'));
log('');
log(Patrycjusz.sayHello());
log('');
log(chalk.green(getNotes()));