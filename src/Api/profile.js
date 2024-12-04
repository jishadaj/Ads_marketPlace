import axios from 'axios';

const API_BASE_URL = 'https://ads.planetmedia.app/'; 
const API_Key = "0c8a6a8c-3acc-4e49-9345-c2ab924e605e"

export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_BASE_URL}api/profile`, {
      headers: {
        'x-api-key': API_Key,
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error.response?.data || error.message);
    throw error;
  }
};

export const updateUserProfile = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(
            `${API_BASE_URL}api/profile`,
            data,
            {
                headers: {
                    'x-api-key': API_Key,
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Update Profile Error:', error.response?.data || error.message);
        throw error;
    }
};
