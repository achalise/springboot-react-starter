## A very simple react app with Spring Boot backend.

### Backend

Implemented using Spring Boot, 
- `userAndPosts` endpoint aggregages
`/users` and `/posts` endpoint from at https://jsonplaceholder.typicode.com,
and returns users with along with their posts.
- `comments` endpoint delegates pass through the call to `/comments` endpoint
 at  https://jsonplaceholder.typicode.com

To run:
```cd backend``` and ```./gradlew bootRun``` which will run the server on port `8080`

### Front end

Implemented using `ReactJS`, application bootstrapped using `create-react-app`
To run:
```cd blogs-ui```, ```npm install``` and ```npm start```
This will run the client at `localhost:3000`

Backend has CORS configured to allow all requests for now to enable testing.

### Testing

Example test cases to get started with unit and integration testing

### Styling

bare bones `bootstrap 4`
