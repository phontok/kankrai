const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static("client/dist"));

app.get('/api', (req, res) => {
  res.send('Hello from express!');
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
