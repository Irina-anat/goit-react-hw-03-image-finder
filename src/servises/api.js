import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
  key: '35791203-a082b793cbab5a6f0440a6e52',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const fetchImages = async (searchQuery, page) => {
  const images = await axios.get(`?q=${searchQuery}&page=${page}&${searchParams}`);
  //console.log(images.data)
  return images.data;
};

