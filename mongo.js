const mongoose = require('mongoose')

if (process.argv.length < 3 || process.argv.length === 4 || process.argv.length > 5) {
    console.log('\nKäyttöohjeet:\n   - Uuden henkilön tallennus: node.js <salasana> <nimi> <numero>\n   - Henkilöiden haku: node.js <salasana>')
    console.log('')
    process.exit(1)
}

const url =
    `mongodb+srv://esahla-mongo-user-1:${process.argv[2]}@cluster0-3py3k.mongodb.net/puhelinluettelo?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
})

if (process.argv.length === 3) {
    Person.find({}).then(result => {
        console.log('puhelinluettelo:')
        result.forEach(person => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}

if (process.argv.length === 5) {
    person.save().then(response => {
        console.log('lisätään', person.name, 'numero', person.number, 'luetteloon');
        mongoose.connection.close();
    })
}


