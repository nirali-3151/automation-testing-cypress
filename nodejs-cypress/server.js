const express = require('express'); //set up middlewares to respond to HTTP Requests
const bodyParser = require("body-parser");//process JSON data
const cors = require("cors");//interact with resources from a different origin
//define routes
const routes = require('./app/routes/routes');

const port = process.env.PORT || 8080; 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(express.json());


// Handling Errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));