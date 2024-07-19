import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '15a4c75ad8mshb704497d888a186p1fb38ejsnd21ddf164745',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
