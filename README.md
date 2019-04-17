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
| `PUT /api/persons/:id` | Modifies the information of person with given `id`. |

## Puhelinluettelo frontend

Done with [React](https://reactjs.org/)
<img style='display:block; width:100px;height:100px;' id='base64image' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />



