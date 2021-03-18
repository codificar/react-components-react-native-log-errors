import axios from 'axios';
import Navigation from './navigation';

const api = axios.create({
    handlerEnabled: true
});

api.interceptors.request.use(req => {
    console.log(`REQ: ${req.method} ${req.url}`);
    // Important: request interceptors **must** return the request.
    return req;
});

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const { status } = error.response;
        console.log('Resposta interceptor Error Status', status);

        if (status === 500 || status === 504) {
            Navigation.navigate('ErrorScreen');
        }

        return Promise.reject(error);
    },
);
  
export default api;