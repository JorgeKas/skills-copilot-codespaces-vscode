// Create web server
// 1. Load the express module
// 2. Create an express application
// 3. Create a route for GET /comments
// 4. Make a request to the comments API
// 5. Send the response from the comments API to the client
// 6. Start the server and listen on port 3001
// 7. Create a route for POST /comments
// 8. Parse the body of the request
// 9. Make a request to the comments API
// 10. Send the response from the comments API to the client

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.get('/comments', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/comments', async (req, res) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/comments', req.body);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});