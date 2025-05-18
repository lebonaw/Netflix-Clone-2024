const API_KEY = ProcessingInstruction.env.REACT_APP_API_KEY;
const requests = {
    fetchTranding: `/trending/all/week?api_key = ${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&with_generes=10749`,
    fetchDocumentaries: `/discover/movies?api_key=${API_KEY}&with_generes=99`,
    fetchTVshow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,

};
export default requests;