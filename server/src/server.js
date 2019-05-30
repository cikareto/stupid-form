const express = require('express');
const bodyParser = require('body-parser');

const register = require('./apis/register');
const authenticate = require('./apis/authenticate');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/authentication', (req, res) => {
  console.log(req.body);
  try {
    const result = authenticate(req.body);
    res.send({
      status: 200,
      result
    });
  } catch (err) {
    console.log('error: ', err);
    res.status(err.status).send({
      status: err.status,
      error: {
        message: err.message
      }
    });
  }
});

app.post('/api/registration', (req, res) => {
  console.log(req.body);
  try {
    const result = register(req.body);
    res.send({
      status: 200,
      result
    });
  } catch (err) {
    console.log('error: ', err);
    res.status(err.status).send({
      status: err.status,
      error: {
        message: err.message,
        validationErrors: err.validationErrors
      }
    });
  }
});

module.exports = app;
