const { Client } = require('dwolla-v2');

const dwolla = new Client({
  key: process.env.DWOLLA_ID,
  secret: process.env.DWOLLA_SECRET,
  environment: process.env.DWOLLA_ENV,
});

module.exports.client = dwolla;
