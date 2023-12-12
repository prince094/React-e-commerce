import apiClient from '../axios';

export function getProductList(params: string | undefined) {
  return apiClient.get('/data/data-products.json', { params });
}
