// const env = 'LOCAL';
// const env = 'DEV';
const env = 'QA';

const API_SERVER_LIST = {
  QA: 'http://localhost:3232/api/v1',
  DEV: 'http://localhost:3232/api/v1',
  LOCAL: 'http://localhost:3232/api/v1',
};

export const API_SERVER = API_SERVER_LIST[env];
