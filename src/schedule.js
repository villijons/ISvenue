/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const axios = require('axios');

function concerts() {
  const promise = axios.create({
    baseURL: 'https://apis.is',
  });

  return promise.get('/concerts');
}

function concert(name) {
  const promise = axios.create({
    baseURL: 'https://apis.is',
  });
  const slod = `/concerts/${name}`;

  return promise.get(slod);
}

module.exports = {
  concerts,
  concert,
};
