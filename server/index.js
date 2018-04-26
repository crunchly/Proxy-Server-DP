/* eslint no-console: 0 */
const express = require('express');
const morgan = require('morgan');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

// Dynamic
app.use('/funding-rounds', (req, res) => {
  fetch(`http://http://ec2-54-153-47-59.us-west-1.compute.amazonaws.com/funding-rounds/${req.originalUrl}`)
    .then(fetchRes => fetchRes.json())
    .then(data => res.send(data))
    .catch((err) => {
      console.error(err.stack);
      res.sendStatus(404);
    });
});

app.use('/overview', (req, res) => {
  fetch(`http://localhost:3002${req.originalUrl}`)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch((err) => {
      console.error(err.stack);
      res.sendStatus(404);
    });
});

app.use('/people', (req, res) => {
  fetch(`http://localhost:3004${req.originalUrl}`)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch((err) => {
      console.error(err.stack);
      res.sendStatus(404);
    });
});

app.use('/api/funding_round', (req, res) => {
  fetch(`http://localhost:3003${req.originalUrl}`)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch((err) => {
      console.error(err.stack);
      res.sendStatus(404);
    });
});

app.listen(port, () => {
  process.stdout.write(`server running at: http://localhost:${port}\n`);
});
