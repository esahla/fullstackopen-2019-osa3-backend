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

Done with [React](https://reactjs.org/).