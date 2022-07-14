import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-abcf4.cloudfunctions.net/api', // api url
});

export default instance;

// http://localhost:5001/clone-abcf4/us-central1/api
