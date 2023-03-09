import axios from 'axios';

const productsInstance = axios.create({
    baseURL: "https://640714fd862956433e63643a.mockapi.io/api/products",
});

export const getProducts = () => productsInstance.get('/');