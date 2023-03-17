import axios from 'axios';
import { API_SERVER, PORT } from '../utils/env';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login: (username: string, password: string) => {
        return axios.get(`${API_SERVER}:${PORT}/login`, {
            headers: {
                "Content-Type": "application/json",
            },
            auth: {
                username: username,
                password: password,
            },
        });
    },
    getUsers: (token: string, page: number) => {
        return axios.get(
            `${API_SERVER}:${PORT}/api/get_all_people?page=${page}&page_len=3`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            }
        );
    },
    getImage: (token: string, url: string) => {
        return axios.get(`${API_SERVER}:${PORT}${url}`, {
            headers: {
                Authorization: token,
                "Content-type": "image/jpg",
            },
            responseType: "blob",
        });
    },
}