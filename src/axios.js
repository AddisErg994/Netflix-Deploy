import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
}); 

// instant.get("./movie/top_rated")
export default instance;