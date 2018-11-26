'use strict';

module.exports = {
  networks: {
    local: {
      name: 'dev-5777', // Must match zos.dev json file generated by zos push
      host: 'localhost',
      port: 7545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '5777',
      from: '0x986C8ca9E1E87a540B43704151369b4BC05428bF',
    },
  },
};
