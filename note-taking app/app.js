const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const command = (process.argv[2])

//adding, removing, read, and listing methods

//Creating add command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv)
    {
        notes.addNote(argv.title,argv.body)
    }
 }
)

//Creating a remove command
yargs.command(
    {
        command: 'remove',
        describe: 'Removing a note',
        builder:{
            title: {
                describe: 'Note title to be removed',
                demandOption: true,
                type: 'string'
            },
        },
        handler: function(argv) 
        {
           notes.removeNotes(argv.title)
        }
    }
)

//Creating a list command
yargs.command(
    {
        command: 'list',
        describe: 'listing a note',
        handler: function() 
        {
            notes.listNotes()
        }
    }
)

//Creating a read command 
yargs.command(
    {
        command: 'read',
        describe: 'Reading a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) 
        {
            notes.readNotes(argv.title)
        }
    }
)


yargs.version('1.1.0')
yargs.parse()

