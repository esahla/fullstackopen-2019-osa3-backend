const mongoose = require('mongoose')

if (process.argv.length < 3 || process.argv.length === 4 || process.argv.length > 5) {
    console.log('\nKäyttöohjeet:\n   - Uuden henkilön tallennus: node.js <salasana> <nimi> <numero>\n   - Henkilöiden haku: node.js <salasana>')
    console.log('')
    process.exit(1)
}
console.log(process.argv, process.argv.length)

const password = process.argv[2]

const url =
    `mongodb+srv://esahla-mongo-user-1:${password}@cluster0-3py3k.mongodb.net/puhelinluettelo?retryWrites=true`

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

person.save().then(response => {
    console.log('lisätään', person.name, 'numero', person.number, 'luetteloon');
    mongoose.connection.close();
})

// Note.find({}).then(result => {
//   result.forEach(person => {
//     console.log(person)
//   })
//   mongoose.connection.close()
// })
