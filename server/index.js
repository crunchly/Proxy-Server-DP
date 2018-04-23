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
  fetch(`http://localhost:3001${req.originalUrl}`)
    .then(response => response.json())
    .then(data => res.send(data));
});

app.listen(port, () => {
  process.stdout.write(`server running at: http://localhost:${port}\n`);
});
