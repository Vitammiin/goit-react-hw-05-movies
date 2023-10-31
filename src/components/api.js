import axios from 'axios';

const API_KEY = 'e2886f46422ceca05bc406dbf650a594';

export const apiMove = async () => {
  const { data } = await axios.get(`
https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
  return data.results;
};
