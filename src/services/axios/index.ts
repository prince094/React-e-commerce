import axios from 'axios';

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // baseURL: process.env.VUE_APP_BACKEND_URL,
  baseURL: 'http://localhost:5173/src/',
  // baseURL: 'https://jsonplaceholder.typicode.com/',
});

// axios.defaults.withCredentials = true
apiClient.interceptors.request.use((request) => {
  // request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    const { response } = error;
    if (response.status !== 200) {
      console.error(error.message);
      throw error;
      // Rethrow the error to propagate it further
    }
    // const errorMessage =
    //   error.moreDetailInFuture || 'Системная ошибка, попробуйте позже';

    // store.dispatch('showLoading', false).then((r) => console.log(r));
  }
);

export default apiClient;

// import { type AxiosResponse } from 'axios';
// import apiClient from './config.ts';

// export async function get<T>(url: string): Promise<T> {
//   try {
//     const response: AxiosResponse<T> = await apiClient.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Failed to fetch data. ${error.message}`);
//   }
// }

// export async function post<T>(url: string, data: any): Promise<T> {
//   try {
//     const response: AxiosResponse<T> = await apiClient.post(url, data);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Failed to post data. ${error.message}`);
//   }
// }
