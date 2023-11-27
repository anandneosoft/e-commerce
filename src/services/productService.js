import axios from "axios";

const url = 'https://fakestoreapi.com/products/';

function addProduct(data) {
    return axios.post(url, data);
}
function getProducts() {
    return axios.get(url);
}
function getProduct(id) {
    return axios.get(url + id);
}
function updateProduct(id, data) {
    return axios.put(url + id, data);
}
function removeProduct(id) {
    return axios.post(url, id);
}

export {addProduct, getProducts, getProduct, updateProduct, removeProduct };