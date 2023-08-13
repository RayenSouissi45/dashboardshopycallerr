import axios from 'axios';

export type Product = {
  id: number;
  productName: string;
  price: number;
  description: string;
  availability: string;
  productImage: string;
};

export const fetchProducts = (): Promise<Product[]> => {
  return axios.get('http://localhost:4040/products/product')
    .then((response) => response.data);
};