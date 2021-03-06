const mongoose = require('mongoose')
var validaattori = require('mongoose-unique-validator')
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const url = process.env.MONGODB_URI

console.log('Connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
  .then(console.log('Connected to MongoDB'))
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'should be at minimum 3 letters long'],
    required: true,
    unique: true
  },
  number: {
    type: String,
    minlength: [8, 'should be at minimum 8 digits long'],
    required: true,
    unique: false
  }
})

personSchema.plugin(validaattori)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)