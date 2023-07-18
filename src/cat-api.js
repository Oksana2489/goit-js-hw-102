
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = 'live_quhXgo8hYOvzHwt9xGRV9NRNMaWB2hyJsjR5WRa5R0yAolibd9QfhjSTEKT4rHr6';
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY = 'live_quhXgo8hYOvzHwt9xGRV9NRNMaWB2hyJsjR5WRa5R0yAolibd9QfhjSTEKT4rHr6';
export function fetchBreeds() {
  return fetch(`${BASE_URL}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedId}&api_key=${API_KEY}`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(error => {
      console.log(error);
    });
}