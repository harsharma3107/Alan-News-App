import axios from 'axios';

const GetNews = (category) =>{
    const API_KEY = '4e090c4e2cf14db1ba383fbb353c9ddc';
    const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;

    return axios.get(`${API_Endpoint}&apikey=${API_KEY}`);
    
}

export default GetNews;
// export GetAllNews;