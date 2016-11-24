/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const axios = require('axios');

/**
 * Fetches all available channels from endpoint, returns a promise that when
 * resolved returns an array, e.g.:
 * [{ name: 'Rúv', endpoint: '/tv/ruv' }, ... ]
 *
 * @returns {Promise} - Promise with available channels when resolved
 */
function concerts() {
  return instance.get('/concerts');
}

/**
 * Fetches schedule for a channel by name, returns an array, e.g.:
 * [{ title: '...', duration: '...', startTime: '...', ...}, ...]
 * If the channel does not exist, the empty array is returned.
 *
 * @param {string} name - Name of the channel
 * @returns {Promise} - Promise with schedule for channel when resolved
 */
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
