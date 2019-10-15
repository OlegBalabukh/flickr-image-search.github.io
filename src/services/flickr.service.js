import axios from 'axios';

const API_URL = 'https://api.flickr.com/services/rest/';

const DEFAULT_PARAMS = {
  api_key: process.env.REACT_APP_FLICKR_API_KEY,
  safe_search: 1,
  per_page: 12,
  format: 'json',
  nojsoncallback: 1,
  extras: 'tag'
};

const getPhotoURL = (photo) => {
  const {
    id,
    farm,
    secret,
    server
  } = photo;

  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
}


export const fetchPhotos = async (tags = '') => {

  const method = 'flickr.photos.search';

  const params = {
    ...DEFAULT_PARAMS,
    method,
    tags
  };
  
  return axios
    .get(API_URL, { params })
    .then(({ data }) => {

      if (data.stat === 'fail' || !data.photos) {
        throw new Error('Flickr request failed.');
      }

      const photos = data.photos.photo || [];
      
      return photos.map((item) => {
          item.photoURL = getPhotoURL(item);
          return item;
        });
    });
};