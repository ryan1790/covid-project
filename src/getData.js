import axios from 'axios';

export default function getData(endpoint, filter){
    const options = {
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "b69bf8ac70msh362b138e8055b3ap1a23adjsn440d6a5979e0"
      },
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
    };
    let parameters;
    if (filter){
      parameters = `?country=${filter}`;
    } else {
      parameters = '';
    }
    const url = `https://covid-193.p.rapidapi.com/${endpoint}${parameters}`;
  
    return axios.get(url, options);
    }