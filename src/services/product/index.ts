import { type AxiosResponse } from 'axios';
import apiClient from '../axios';
import { Product } from '../../pages/CatalogProductPage';

export async function getProductList(
  url: string,
  params: string | undefined
): Promise<Product[]> {
  try {
    const response: AxiosResponse<Product[]> = await apiClient.get(url, {
      params,
    });

    return response as unknown as Product[];
  } catch (error) {
    throw new Error('Failed to fetch products.');
  }
}
