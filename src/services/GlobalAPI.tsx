

// import axios from 'axios';

// const BASEURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';
// // const apiKey = 'AIzaSyAgqe2rfUwDrc9AeSINQOmAW7gUkQ19Emw';

// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//    ' Access-Control-Allow-Origin': '*', 
//   },
//   'X-Google-Api-Key': 'AIzaSyAgqe2rfUwDrc9AeSINQOmAW7gUkQ19Emw',
//   'X-Google-FieldMask':[
//       'place.photos',
//       'place.displayName',
//       'places.id'
//   ]
// };  

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const GetPlaceDetails = (data: string): Promise<any> => {
//   return axios.post(BASEURL, data, config);
// };



// import axios from 'axios';

// const PROXY_URL = 'http://localhost:3001/api/place';

// export const GetPlaceDetails = async (query: string) => {
//   try {
//     const response = await axios.get(PROXY_URL, {
//       params: {
//         query: query,
//       },
//     });
//     return response.data;
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching place details:', error);
//     throw error;
//   }
// };


import axios from 'axios';

import { UNSPLASH_ACCESS_KEY } from '../environment/environment';

export const GetPlaceDetails = async (query: string) => {


try {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query },
      headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
  });

  const photos = response.data.results;
  if (photos.length === 0) {
      throw new Error('No photos found');
  }

  const randomNumber = Math.floor(Math.random() * 4);

  const photoUrl = photos[randomNumber].urls.full;

  return photoUrl;

} catch (error) {
  console.error(error);
  throw new Error('An error occurred while fetching the photo');
}

}


