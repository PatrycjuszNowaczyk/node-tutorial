// This is only for example purposes


class Human {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return `My name is ${this.name}, and I love to note.`;
    };
}

function getNotes() {
    return 'Try to keep your notes as safe as possibe!!!';
}

export { Human, getNotes };