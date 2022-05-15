const yargs = require('yargs')
// import chalk from 'chalk';
const chalk = require('chalk')
// const validator = require('validator')
const notes = require('./notes')

// console.log(chalk.green('Success'));

// console.log(process.argv);
yargs.version('5.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body description',
            demandOption: true,
            type: 'string'    
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            describe: 'NOte title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }

})
//list Notes
yargs.command({
    command: 'list',
    describe: 'list your note!',
    handler (){
        notes.listNotes()
    }
})

// Read Notes by title
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title);
    }
})

// console.log(yargs.argv);
yargs.parse()
