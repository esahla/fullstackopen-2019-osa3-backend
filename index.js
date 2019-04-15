const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(morgan('tiny'))

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Martti Tienari",
        "number": "040-123456",
        "id": 2
    },
    {
        "name": "Arto Järvinen",
        "number": "040-123456",
        "id": 3
    },
    {
        "name": "Lea Kutvonen",
        "number": "040-123456",
        "id": 4
    },
    {
        "name": "Kerttu Löppönen",
        "number": "050-9998880",
        "id": 5
    }
]

const infoPage = () => {
    let nyt = new Date()
    return (`<p>Puhelinluettelossa on ${persons.length} henkilön tiedot.</p>\n<p>${nyt}</p>`)
}

app.get('/info', (req, res) => {
    res.send(infoPage())
})

app.get('/', (req, res) => {
    res.send('<h3>This server is used for Fullstackopen-2019 excersize osa3/puhelinluettelo-backend</h3>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id)

    if (person) {
        persons = persons.filter(person => person.id !== id);
        response.status(204).end();   
    } else {
        response.status(404).end()
    }
});

const generateRandomId = () => {
    const randId = Math.floor(Math.random() * Math.floor(50000));
    return randId
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body) {
        return response.status(400).json({
            error: 'Content missing from person creation request. Should include name and number.'
        })
    } else if (!body.name) {
        return response.status(400).json({
            error: 'Name missing from person creation request.'
        })
    } else if (!body.number) {
        return response.status(400).json({
            error: 'Number missing from person creation request.'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateRandomId()
    }
    persons = persons.concat(person)
    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log()
    console.log('Server started: http://localhost:'+PORT)
    console.log()
})