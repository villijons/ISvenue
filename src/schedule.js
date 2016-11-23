/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const axios = require('axios');

const baseURL = process.env.BASEURL; // apis.is
const instance = axios.create({ baseURL, timeout: 2000 });

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
function concert(name) {
  return concerts().then((result) => {
    if (result.data && result.data.results.length > 0) {
      const tmp = result.data.results[0].concerts;
      console.log(tmp);
      let endpoint;
      tmp.map((concert) => {
        if (concert.name === name) {
          endpoint = concert.results;
          console.log(endpoint);
        } else {
          return [];
        }
        return [];
      });
      if (endpoint) {
        return instance.get(results);
      }
    }
    return [];
  });
}

module.exports = {
  concerts,
  concert,
};
