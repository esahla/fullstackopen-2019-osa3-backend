// const url =
//     'mongodb+srv://esahla-mongo-user-1:MYUQv7T4hHFbphqY@cluster0-3py3k.mongodb.net/note-app?retryWrites=true'
//     `mongodb://esahla:admin123!@localhost:27017/mydatabase?retryWrites=true`

const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const url = process.env.MONGODB_URI

console.log('Connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)