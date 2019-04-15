const express = require('express')
const app = express()
const chalk = require('chalk')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

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
    }
]

const infoPage = () => {
    let nyt = new Date()
    return (`<p>Puhelinluettelossa on ${persons.length} henkilön tiedot.</p>\n<p>${nyt}</p>`)
}

app.get('/info', (req, res) => {
    console.log(chalk.blue.bold('GET'), 'info page')
    res.send(infoPage())
})

app.get('/', (req, res) => {
    console.log(chalk.blue.bold('GET'), 'root page')
    res.send('<h3>This server is used for Fullstackopen-2019 excersize osa3/puhelinluettelo-backend</h3>')
})

app.get('/api/persons', (req, res) => {
    console.log(chalk.blue.bold('GET'), 'all persons')
    res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        console.log(chalk.blue.bold('GET'), 'person with id', chalk.bold(id), 'with name', chalk.bold(person.name))
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id)

    if (person) {
        console.log(chalk.red.bold('DELETE'), 'person', chalk.bold(person.name), 'with id', chalk.bold(id))
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

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'Content missing from person creation request'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateRandomId()
    }
    persons = persons.concat(person)

    console.log(
        chalk.green.bold('ADD'), 'person', chalk.bold(person.name), 
        'with number', chalk.bold(person.number),
        'and with id', chalk.bold(person.id)
        )
    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log()
    console.log(chalk.bold('Server started'), 'http://localhost:'+PORT)
    console.log()
})