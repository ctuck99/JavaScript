class codingBootcamp {
    constructor(name, stack, languages, dbms, other) {
        this.name = name;
        this.stack = stack;
        this.languages = languages;
        this.dbms = dbms;
        this.other = other;
    }
    printCodingBootcampInfo() {
        console.log(`The ${this.name} program consists of: `);
        console.log(this.stack);
        console.log(this.languages);
        console.log(this.dbms);
        console.log(this.other);
        console.log('\n');
        }
    }

var skillspire = new codingBootcamp('Skillspire Full Stack Web Development',
    'MERN', 'JavaScript, React, NodeJS, HTML, CSS', 'MongoDB', 'Mongoose')
skillspire.printCodingBootcampInfo();

var vetsWhoCode = new codingBootcamp('VetsWhoCOde', 'JAMstack, Gatsby', 
    'JavaScript, React, GraphQL, JSON, HTML, CSS', 'no DBMS', 'APIs')
vetsWhoCode.printCodingBootcampInfo();