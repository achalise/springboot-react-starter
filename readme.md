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

There was not enough time to implement all tests, as I wanted to get the functionality
done as priority. There are sample test cases implemented as example / foundation to 
implement further tests.

### Styling

Very minimal attention given to styling, used `bootstrap 4` to quickly
implement the UI. 
