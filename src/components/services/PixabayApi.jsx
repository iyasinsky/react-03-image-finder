import axios from 'axios';

export const getImages = async ({ query, page }) => {
  const response = await axios({
    method: 'GET',
    url: 'https://pixabay.com/api/',
    params: {
      key: '39495735-1e28386ea245dafd6542f3284',
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: `${page}`,
    },
  });
  return response.data;
};

// const fetchBreeds = async () => {
//   const response = await axios.get('/breeds');
//   return response.data;
// };

// const fetchDogByBreed = async breedId => {
//   const response = await axios.get('/images/search', {
//     params: {
//       breed_id: breedId,
//     },
//   });
//   return response.data[0];
// };
