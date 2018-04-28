/* eslint no-console: 0 */
const app = require('./app.js');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  process.stdout.write(`server running at: http://localhost:${port}\n`);
});

