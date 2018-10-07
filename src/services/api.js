import axios from 'axios';

export const getData = (limit = 10) => {
  return axios.get(`https://api.coinmarketcap.com/v2/ticker/?limit=${limit}`)
    .then((res) => {
      return res.data;
    })
    .catch(console.log);
};
