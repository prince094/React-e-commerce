import axios from 'axios';

const apiClient = axios.create({
  // baseURL: process.env.VUE_APP_BACKEND_URL,
  baseURL: 'http://localhost:5173/src/',
});

// axios.defaults.withCredentials = true
apiClient.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  console.log('some error: ');
  return request;
});

apiClient.interceptors.response.use(undefined, (error) => {
  const { response } = error;
  const { data } = response;
  console.log('some error 2:');
  if (response.status !== 200) {
    // Handle error
    alert('Status is not equal 200');
  }
  const errorMessage =
    data.error.details || 'Системная ошибка, попробуйте позже';
  alert(errorMessage);

  // store.dispatch('showLoading', false).then((r) => console.log(r));
});

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
