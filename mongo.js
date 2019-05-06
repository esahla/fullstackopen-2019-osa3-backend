const mongoose = require('mongoose')

if (process.argv.length < 3 || process.argv.length === 4 || process.argv.length > 5) {
  console.log('\nKäyttöohjeet:\n   - Uuden henkilön tallennus: node.js <salasana> <nimi> <numero>\n   - Henkilöiden haku: node.js <salasana>')
  console.log('')
  process.exit(1)
}

const url =
  // For MongoDB Atlas, use (uncomment) this
  // `mongodb+srv://esahla-mongo-user-1:${process.argv[2]}@cluster0-3py3k.mongodb.net/puhelinluettelo?retryWrites=true`
  // For local MongoDB, use (uncomment) this:
  `mongodb://esahla:${process.argv[2]}@localhost:27017/mydatabase?retryWrites=true`


mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
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
  person.save().then(() => {
    console.log('lisätään', person.name, 'numero', person.number, 'luetteloon')
    mongoose.connection.close()
  })
}


