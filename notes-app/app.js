// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Ritul')
// fs.appendFileSync('notes.txt', ' I live in patna.')

// Challenge : Append a message to notes.txt
// 1. Use appendFileSync to append to the file
// 2. Run the script
//  3. Check your work by opening the file and viewing the appended text
// const add = require('./utils.js')
// const sum = add(4,-2)
// console.log(sum);

// Challenge : Define and use a function in a new file
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. from app.js load in and caall the function printing message to console
// const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js')
// const command = process.argv[2]
// console.log(process.argv)
// Customize yargs version
yargs.version('1.1.0')

//  challenge : wire up removeNote
// 1. load existing notes
// 2. use array filter method to remove the matching note(if any)
// 3. save the newly created array
// 4. test your work with a title tht exists and a title that doesn't exist

// add, remove, read, list
// create add command

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true
        }
    },
    body:{
        describe:'note body',
        demandOption: true,
        type:'string'
    },
    handler: function(argv){
       notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe: 'list your notes',
    handler: function(){
        console.log('listing out all note')
    }
})

yargs.command({
    command:'read',
    describe: 'read a note',
    handler: function(){
        console.log('reading the note')
    }
})
console.log(yargs.argv)
// yargs.parse()

// if(command === 'add'){
//     console.log('ading note')
// }else if(command === 'remove'){
//     console.log('removing note')
// }
// const msg = getNotes()
// console.log(msg)
// console.log(chalk.blue.bold.inverse('success!'))
// console.log(process.argv[2])

// console.log(validator.isURL('https//mead.io'))
// Challenge : use the chalk library in your project
// 1. Install version 2.4.1 of chalk
// 2. load chalk into app.js
// 3. use it to print the string "success" to the console in green
// 4. test your work
// bonus: use docs to mess around with other styles. make text bold and inversed.

// Challenge: setup the remove command to take a required "--title" option
//  2. create and export a removeNote function from notes.js
// 3. call removeNote in remove in remove commaand handler
// 4. test your work using : node app.js remove --title="some title"