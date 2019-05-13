# Puhelinluettelo-backend
This is the puhelinluettelo-backend for [Fullstackopen 2019](https://fullstackopen.com/) online course made by yours truly.

## Application in Internet
The application is running on Heroku: <br>https://pacific-reef-85523.herokuapp.com/

## Backend API
| Route                  | Description        |
|------------------------|--------------------|
| [`GET /api`](https://pacific-reef-85523.herokuapp.com/api)             | Returns info-page. |
| [`GET /api/persons`](https://pacific-reef-85523.herokuapp.com/api/persons)     | Returns all persons and their phone numbers. |
| [`GET /api/persons/:id`](https://pacific-reef-85523.herokuapp.com/api/persons/3) | Returns person and phone number for particular `id`. |
| `POST /api/persons/`   | Stores new person when provided with correct content as input in the request body. Expects `name` and `number`. For example: <br>```{ "name": "Test", "number": "01020304" }``` |
| `DELETE /api/persons/:id` | Deletes person with given `id`. |
| `PUT /api/persons/:id` | Modifies the information of person with given `id`. |

## Puhelinluettelo frontend

Done with [React](https://reactjs.org/) according to the course instructions, the frontend code is maintained in a separate repository (https://github.com/esahla/fullstackopen-2019/), under 'osa3': https://github.com/esahla/fullstackopen-2019/tree/master/osa3. 

The backend-compatible version of the frontend code is based on the puhelinluettelo-exercise from Osa2, with some modifications to fulfill new requirements for the fullstack puhelinluettelo applications from Osa3. 

## Linting

The code is analyzed with ESLint. You can run `npm run lint` to see the linting results. The rules used in the linting are same as what were used in the course exercise. 

*Note:* Slightly modified AirBnB linting rules were used in a separate branch that can be found here: https://github.com/esahla/fullstackopen-2019-osa3-backend/tree/Osa3.22-AirBnB-rules

## Using MongoDB

By default, this exercise uses [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for creating and managing the MongoDB database being used to store the persons of the puhelinluettelo. 

However, in case MongoDB Atlas cannot be used, you can use a *local MongoDB* instead. Recommended approach is to use MongoDB Docker image to create a MongoDB database: 

* Good instructions can be found from here: https://blog.jeremylikness.com/mongodb-on-windows-in-minutes-with-docker-3e412f076762
* Some basic commands to see what's happening inside the MongoDB database: https://dzone.com/articles/top-10-most-common-commands-for-beginners

For this assignment, we're creating a database called `puhelinluettelo-app` to store our persons in a collection called `people` (multiple `Person`s).

----

### Some lessons learned from the course so far

* Create new react app with `npx create-react-app`, and new backend with `npm init` 
* Use npm module dotenv and `.env` file to define environment variables
* When needed, use heroku to test online deployment. Use MongoDB Atlas when you need MongoDB database.
* If you use Heroku, use `Procfile`
* Create a deploment script to build frontend and deploy it as part of backend.
* Create necessary / helpful npm scripts to aid in development:
```json
  "scripts": {
    "watch": "nodemon index.js",
    "start": "node index.js",
    "lint": "eslint ."
  },
```
* To lint: `npm install eslint --save-dev`, then `node_modules/.bin/eslint --init`, and finally `npm run lint`
* It's good to .eslintignore the `build` directory
* Good items to use for backend REST API:
```javascript
require('dotenv').config()  // For env. variables, 'npm install dotenv --save'
const express = require('express') // Express app, 'npm install express --save'
const morgan = require('morgan') // For HTTP event logging
const cors = require('cors') // For enabling CORS, 'npm install cors --save'
const bodyParser = require('body-parser') // For parsing the JSON request
const mongoose = require('mongoose') // Library for MongoDB, 'npm install mongoose --save'
```
* Use Mongoose as a library for MongoDB
* Remember to .gitignore `node_modules/` and `.env`
* Use nodemon to keep the app running on the background, taking in updates. (`npm install nodemon --save-dev`, `npm run watch`)
* Take frontend build into use in backend app implementation by addin `app.use(express.static('build'))`
