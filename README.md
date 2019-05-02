# Puhelinluettelo-backend
This is the puhelinluettelo-backend for [Fullstackopen 2019](https://fullstackopen.com/) online course made by me.

## Backend application in Internet
Backend running on Heroku: <br>https://pacific-reef-85523.herokuapp.com/

## Backend API:
| Route                  | Description        |
|------------------------|--------------------|
| [`GET /api`](https://pacific-reef-85523.herokuapp.com/api)             | Returns info-page. |
| [`GET /api/persons`](https://pacific-reef-85523.herokuapp.com/api/persons)     | Returns all persons and their phone numbers. |
| [`GET /api/persons/:id`](https://pacific-reef-85523.herokuapp.com/api/persons/3) | Returns person and phone number for particular `id`. |
| `POST /api/persons/`   | Stores new person when provided with correct content as input in the request body. Expects `name` and `number`. For example: <br>```{ "name": "Test", "number": "010123" }``` |
| `DELETE /api/persons/:id` | Deletes person with given `id`. |
| `PUT /api/persons/:id` | Modifies the information of person with given `id`. (not working at the moment) |

## Puhelinluettelo frontend

Done with [React](https://reactjs.org/) according to the course instructions, the frontend code is maintained in a separate repository (https://github.com/esahla/fullstackopen-2019/), under 'osa3': https://github.com/esahla/fullstackopen-2019/tree/master/osa3. 

The backend-compatible version of the frontend code is based on the puhelinluettelo-exercise from Osa2, with some modifications to fulfill new requirements for the fullstack puhelinluettelo applications from Osa3. 

## Using MongoDB

By default, this exercise uses [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for creating and managing the MongoDB database being used to store the persons of the puhelinluettelo. 

However, in case MongoDB Atlas cannot be used, you can use a *local MongoDB* instead. Recommended approach is to use MongoDB Docker image to create a MongoDB database: 

* Good instructions can be found from here: https://blog.jeremylikness.com/mongodb-on-windows-in-minutes-with-docker-3e412f076762
* Some basic commands to see what's happening inside the MongoDB database: https://dzone.com/articles/top-10-most-common-commands-for-beginners

For this assignment, we're creating a database called `puhelinluettelo-app` to store our persons in a collection called `people` (multiple `Person`s).
