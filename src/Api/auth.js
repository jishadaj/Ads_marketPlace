import axios from 'axios';

const API_BASE_URL = 'https://ads.planetmedia.app/'; 
const API_Key = "0c8a6a8c-3acc-4e49-9345-c2ab924e605e"

export const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}api/auth/local/register`,
            {
                username,
                email,
                password,
            },
            {
                headers: {
                    'x-api-key': API_Key,
                },
            }
        );

        const { jwt, user } = response.data;

        
        localStorage.setItem('token', jwt); 
        localStorage.setItem('user', JSON.stringify(user));

        return user; 
    } catch (error) {
        console.error('Registration Error:', error.response?.data || error.message);
        throw error;
    }
};


export const loginUser = async (email, password, apiKey) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}api/auth/local`,
            {
                identifier: email,
                password,
            },
            {
                headers: {
                    'x-api-key': API_Key,
                },
            }
        );

        const { jwt, user } = response.data;

        localStorage.setItem('token', jwt); 
        localStorage.setItem('user', JSON.stringify(user)); 

        return user; 
    } catch (error) {
        console.error('Login Error:', error.response?.data || error.message);
        throw error;
    }
};

