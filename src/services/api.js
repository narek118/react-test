import axios from 'axios';

const sortArray = (list) => {
  const sortedArray = Object.values(list.data).sort((a, b) => {
    console.log(typeof a.rank)
    return a.rank > b.rank ? 1 : -1;
  })
  return sortedArray;
}

export const getData = (limit = 10) => {
  return axios.get(`https://api.coinmarketcap.com/v2/ticker/?limit=${limit}`)
    .then((res) => {
      return sortArray(res.data);
    })
    .catch(console.log);
};
