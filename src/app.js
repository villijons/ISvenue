const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const err = new Error('Síða fannst ekki.');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: 'Engin göng til að birta, kannski í næsta lífi...',
    status: 'kthxbye',
  });
});

module.exports = app;
