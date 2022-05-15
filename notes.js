const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    console.log('Your Notes');
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter( (note) => note.title === title)
    const duplicateNotes = notes.find( (note) => note.title === title)
    
    debugger

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        // console.log(notes);
        saveNotes(notes)
        console.log(chalk.underline.bgGreen('New Note added!'));
    } else {
        console.log(chalk.bold.red('Note title taken'));
    }

}

const saveNotes = function (data) {
    const dataJSON = JSON.stringify(data)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

// Remove Note
const removeNote = (data) => {
    const note = loadNotes();
    const filteredArray = note.filter((val) => val.title !== data)
    if(filteredArray.length == note.length){
        console.log(chalk.red.inverse('No Note found'));
    } else {
        saveNotes(filteredArray)
        console.log(chalk.green.inverse.bgGreen('Note Removed'));
    }
}

// list notes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));

    notes.forEach((note) => {
        console.log(note.title);
    });
}

// Read Notes by title

const readNote = (val) => {
    const notes = loadNotes();
    const filteredArray = notes.find( (note) => note.title === val)
    if(filteredArray){
        console.log(chalk.inverse(filteredArray.title));
        console.log(filteredArray.body);
    } else {
        console.log(chalk.bgRed('No note Found'));
    }
    // console.log(notes.find( (note) => note.title === val));
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}