import axios from 'axios';

const API_BASE_URL = 'https://ads.planetmedia.app/';
const API_Key = "0c8a6a8c-3acc-4e49-9345-c2ab924e605e"

export const postAd = async (adData) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${API_BASE_URL}api/advertisements`, adData, {
            headers: {
                'x-api-key': API_Key,
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; 
    } catch (error) {
        console.error('Error posting ad:', error);
        throw error;
    }
};

export const getAds = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_BASE_URL}api/advertisements`, {
        headers: {
            'x-api-key': API_Key,
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching ads:', error);
    throw error; 
  }
};

