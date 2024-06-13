import axiosInstance from './axiosInstance.js';

export default {
    getProducts: async (startIdx, search) => {
        const formatedSearch = search || '';
        return (await axiosInstance.get(`/products?from_idx=${startIdx || 0}&search=${formatedSearch}`)).data;
    },
    login: async (user, pass) => {
        return (await axiosInstance.post(`/login`, {username : user, password : pass}));
    },
    getUserData: async () => {
        return (await axiosInstance.get(`/users`));
    },
    updateUser : async (user) => {
        return (await axiosInstance.patch('/users', user));
    }
}