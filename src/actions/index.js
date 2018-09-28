import axios from 'axios';

const API_KEY = '7b2d0966f2c0427fdfa92b6993251458';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us&units=imperial`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}