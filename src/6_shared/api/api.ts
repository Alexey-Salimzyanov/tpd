import axios from 'axios';

export const $api = axios.create({
    baseURL: 'http://localhost:8000/',
    // baseURL: 'https://json-placeholder.mock.beeceptor.com/',
});
