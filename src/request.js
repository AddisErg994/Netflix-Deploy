const API_KEY = "2050a3df78d069dc951b8719fd0e2c8c";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchActioncoMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentories: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
