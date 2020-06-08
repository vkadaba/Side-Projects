const fs = require('fs')
const chalk = require('chalk')
const getNotes = function()
{
    return 'Your notes.......'
}

const addNote=function(title,body){
    //duplicate buffer 
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title===title)
    if(!duplicateNote) { 
        notes.push({
        title: title,
        body: body
        })
    }else{
        console.log('Note Title taken!')
    }

   
    saveNotes(notes)
}

const saveNotes=function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON) 
}

const removeNotes = function(title) {
    const notes=loadNotes()
    const notesToKeep = notes.filter((note)=>{
         note.title!==title
    })
   
    if(notes.length>notesToKeep.length){
        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.bgRed('No note removed!'))
    }

}

const loadNotes=function() {
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        const data = JSON.parse(dataJson)
        return data
    }
    catch(e){
        return[]
    }
}

const listNotes= function() {

  try {
      const notes=loadNotes()
      console.log(chalk.bgGreen('Your Notes!'))
         notes.forEach((note)=> {
        console.log(chalk.bgBlue('Title: '+note.title))
        console.log(chalk.inverse('Body: '+note.body))
        })
     }
     catch(e) {
         return[]
     }
}

const readNotes= (title) => {
    const notes=loadNotes()
    const note = notes.find((note)=> note.title===title)
    if(note){
        //console.log(chalk.bgGreen(title+' found!'))
        console.log(chalk.bgBlue(note.title))
        console.log(chalk.bgRed(note.body))
    }
    else{
        console.log(chalk.bgRed('Note not found :/'))
    }

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes

}