import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() =>{
  try {
    const response = await axios.get(url);

    const modifiedData = {
      confirmed:response.data.confirmed,
      recovered:response.data.recovered,
      deaths:response.data.deaths,
      lastUpdate:response.data.lastUpdate
     }

    return modifiedData;
  } catch (e) {

  }
}

export const fetchDailyData = async()=>{
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (e) {

  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
