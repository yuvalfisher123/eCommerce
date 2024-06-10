import axiosInstance from './axiosInstance.js';

export default {
    getProducts: async (startIdx, search) => {
        const formatedSearch = search?.replace(' ', '+') || '';
        return (await axiosInstance.get(`/products?from_idx=${startIdx || 0}&?search=${formatedSearch}`)).data;
    },
}