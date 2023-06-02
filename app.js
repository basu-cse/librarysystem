const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/web');

const app = express();
const port = 3000;

// Parse JSON bodies for POST and PUT requests
app.use(bodyParser.json());

// Routes
app.use('/books', routes);
app.use('/members', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});