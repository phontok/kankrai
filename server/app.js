const express = require('express');
const bodyParser = require('body-parser');
const webhooks = require('./src/webhooks/router');

const app = express();
const { PORT = 3000, UP_STAGE } = process.env
app.set('port', PORT);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static("client/dist"));

app.get('/webhooks', webhooks);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
