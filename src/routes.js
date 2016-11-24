/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const express = require('express');

const router = express.Router();
const schedule = require('./schedule');

router.get('/', (req, res, next) => {
  const title = 'Tónleikar';

  schedule.concerts()
  .then((result) => {
    console.log(result.data);
    if (result.data && result.data.results.length > 0) {
      res.render('index', { concerts: result.data.results, title });
    } else {
      next(new Error('Ekki var hægt að sækja gögn.'));
    }
  })
  .catch((err) => {
    res.render('error', { message: 'fuck villa!', status: 'shit önnur villa' });
  });
});

module.exports = router;
