/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const express = require('express');
const schedule = require('./schedule');

const router = express.Router();

router.get('/', (req, res, next) => {
  const title = 'Tónleikar';

  schedule.concerts()
    .then((result) => {
      if (result.data) {
        const concerts = result.data;
        console.log(concerts);
        res.render('index', { concerts, title });
      } else {
        next(new Error('Ekki var hægt að sækja gögn.)'));
      }
    })
    .catch((err) => {
      res.render('error', { message: 'fuck', status: 'shit' });
    });
});

module.exports = router;
