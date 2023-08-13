const packageJSON = require('../package.json');

// default values
const APP_ENV = process.env.APP_ENV ?? 'development';
const SCHEME = 'com.shopycaller';
const APP_NAME = 'ShopyCaller';

const development = {
  APP_ENV: 'development',
  name: APP_NAME,
  scheme: `${SCHEME}.development`,
  icon: './assets/icon.development.png',
  foregroundImage: './assets/icon.development.png',
  API_URL: 'http://192.168.1.6:4040/',

  // API_URL: 'http://localhost:4040',
  version: packageJSON.version,
};

const staging = {
  APP_ENV: 'staging',
  name: APP_NAME,
  scheme: `${SCHEME}.staging`,
  icon: './assets/icon.staging.png',
  foregroundImage: './assets/icon.staging.png',
  API_URL: 'http://localhost:4040/',

  // API_URL: 'http://192.168.1.6:4040/',
  version: packageJSON.version,
};
const production = {
  APP_ENV: 'production',
  name: APP_NAME,
  scheme: `${SCHEME}`,
  icon: './assets/icon.png',
  foregroundImage: './assets/icon.png',
  API_URL: 'http://localhost:4040/',

  // API_URL: 'http://192.168.1.6:4040/',
  version: packageJSON.version,
};

const configs = { development, staging, production };

const Config = configs[APP_ENV];
module.exports = { Config };
