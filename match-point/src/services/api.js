import axios from "axios";

export default (url = "https://livescore6.p.rapidapi.com") => {
  return axios.create({
    baseURL: url,
    headers: { 'X-RapidAPI-Key': process.env.VUE_APP_RAPID_API_KEY }
  });
};