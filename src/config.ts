import packageJson from '../package.json';

const config = {
  APP_VERSION: packageJson.version,
  DATABASES: {
    MONGO_URI: 'mongodb://localhost:27017/test-server',
  },
};

export default config;
