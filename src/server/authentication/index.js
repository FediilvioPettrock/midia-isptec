import { api } from "../api";

export const login = async(email, password) => {
    const result = await api.post('/users/login', {email, password});
    return result.data;
}
export const register = async(email, password, username) => {
    const result = await api.post('/users/register', {email, password, username});
    return result.data;
}