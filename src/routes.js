/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const express = require('express');
const schedule = require('./schedule');

const router = express.Router();

router.get('/', (req, res, next) => {
  const title = 'Sjónvarpsstöðvar';

  schedule.channels()
    .then((result) => {
      if (result.data && result.data.results.length > 0) {
        const channels = result.data.results[0].channels;
        res.render('index', { channels, title });
      } else {
        next(new Error('Ekki var hægt að sækja gögn.)'));
      }
    })
    .catch((err) => {
      res.render('error', { message: 'fuck', status: 'shit' });
    });
});

router.get('/tv/:name', (req, res, next) => {
  schedule.channel(req.params.name)
    .then((result) => {
      let channel;
      if (!result.data) {
        channel = result; // Tómt fylki
      } else {
        channel = result.data.results; // Fylki af hlutum
        res.render('dagskra',
          { channel, title: `Dagskrá ${req.params.name}` });
      }
    })
    .catch(() => {
      next('Villa kom upp.');
    });
});

module.exports = router;
