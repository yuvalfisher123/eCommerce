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
    },
    addAddress: async (address) => {
        return (await axiosInstance.post('users/address', address));
    },
    addCreditCard: async (card) => {
        return (await axiosInstance.post('users/cards', card));
    },
    addUser: async (user) => {
        return (await axiosInstance.post('/login/register', user));
    },
    addToUserCart: async (productId, quantity) => {
        return (await axiosInstance.post('/users/cart', {product_id: productId, quantity: quantity}))
    },
    deleteFromUserCart: async (productId) => {
        return (await axiosInstance.delete(`/users/cart/${productId}`))
    },
    makeOrder: async (paymentId, addressId) => {
        return (await axiosInstance.post(`/orders`, {payment_id: paymentId, address_id: addressId}));
    },
    clearCart: async () => {
        return (await axiosInstance.delete(`/users/cart`));
    },
}