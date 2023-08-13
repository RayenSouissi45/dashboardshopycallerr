
const BASE_URL = 'http://localhost:4040/products/product';

export const getitemdata = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
