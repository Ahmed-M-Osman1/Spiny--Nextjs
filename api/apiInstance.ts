import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://imdb-api.com/en/API',
});

// Response interceptor for API calls
apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest) {
      // redirect to login page
      console.error(
        '401 from intercept',
        'Error Auth. API key not provided.'
      );
    }
    return Promise.reject(error);
  }
);

export default apiInstance;
