const express = require('express');
const path = require('path');
const app = express();

app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public/dist')));

// Set up Routes
app.use('/', require('./routes'));

const port = process.env.PORT || 1128;

app.listen(port, () => {
  console.log('Now listening on CORS-enabled server at PORT: ', port);
});
