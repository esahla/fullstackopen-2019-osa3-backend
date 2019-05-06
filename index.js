require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const Person = require('./models/person')

morgan.token('post_body', req => {
  if (req.method === 'POST') {
    return (JSON.stringify(req.body))
  }
  return (null)
})

const app = express()
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post_body'))
app.use(cors())
app.use(express.static('build'))

// GET info
app.get('/info', (req, res) => {
  const nyt = new Date()
  Person.countDocuments().then(montako => {
    res.send(`<p>Puhelinluettelossa on ${montako} henkilön tiedot.</p>\n<p>${nyt}</p>`)
  })
})

// GET /
app.get('/', (req, res) => {
  res.send('<h3>This server is used for Fullstackopen-2019 excersize osa3/puhelinluettelo-backend</h3>')
})

// GET API
app.get('/api', (req, res) => {
  res.send('<p>API for Fullstackopen 2019 Puhelinluettelo. Serves a list of persons and phone numbers, using a MongoDB as database.</h3>')
})

// GET all persons
app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons.map(person => person.toJSON()))
  })
})

// GET a person with id
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then(person => {
    if (person) {
      response.json(person.toJSON())
    } else {
      response.status(204).end()
    }
  }).catch(error => next(error))
})

// DELETE a person with id
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(response.status(204).end())
    .catch(error => next(error))
})

// POST a new person
app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if (body.name === undefined && body.number === undefined) {
    return response.status(400).json({
      error: 'Content missing from person creation request. Should include name and number.',
    })
  }
  if (!body.name) {
    return response.status(400).json({
      error: 'Name missing from person creation request.',
    })
  }
  if (!body.number) {
    return response.status(400).json({
      error: 'Number missing from person creation request.',
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person
    .save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
      response.status(201).json(savedAndFormattedPerson)
    })
    .catch(error => {
      console.log(error.name)
      next(error)
    })
})

// PUT new information for a person with id (given a number in request)
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  if (!body.number) {
    return response.status(400).json({
      error: 'Number missing from person update request.',
    })
  }

  const person = {
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    }).catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: `Unknown endpoint: ${request.url}` })
}

app.use(unknownEndpoint)

// Error handling
const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformed id' })
  }
  if (error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message })
  }
  if (error.name === 'TypeError' && error.message.toString().includes('toJSON')) {
    return response.status(404).send({ error: 'Käyttäjää ei ole luotu tai se on poistettu' })
  }
  console.log('Unhandled error: ', error.name)
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Server started: http://localhost:', PORT)
})
