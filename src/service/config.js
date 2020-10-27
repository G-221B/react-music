const devBaseURL = 'http://123.207.32.32:9001';
const proBaseURL = 'http://123.207.32.32:9001';

export const baseURL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
export const timeout = 5000;
