/* eslint no-console: 0 */
const express = require('express');
const morgan = require('morgan');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => res.redirect('/organization/Facebook'));

app.use('/organization/:company', express.static(path.join(__dirname, '../client/dist')));

// Dynamic
app.use('/organization/:company/funding-rounds', (req, res) => {
  console.log(`http://ec2-13-57-175-222.us-west-1.compute.amazonaws.com/funding-rounds/${req.params.company}`);
  fetch(`http://ec2-13-57-175-222.us-west-1.compute.amazonaws.com/funding-rounds/${req.params.company}`)
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
  fetch(`http://ec2-18-216-187-237.us-east-2.compute.amazonaws.com${req.originalUrl}`)
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

