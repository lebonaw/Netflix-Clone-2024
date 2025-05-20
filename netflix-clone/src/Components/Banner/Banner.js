import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './banner.css';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const results = response?.data?.results;

        if (Array.isArray(results) && results.length > 0) {
          const randomMovie = results[Math.floor(Math.random() * results.length)];
          setMovie(randomMovie);
        }
      } catch (error) {
        console.error('Failed to fetch Netflix Originals:', error);
      }
    };

    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.slice(0, n - 1) + '...' : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
          : 'none',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name || 'Loading...'}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <p className="banner_description">
          {truncate(movie?.overview, 150)}
        </p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;


// import axios from '../../utils/axios'
// import requests from '../../utils/requests';
// import React, { useEffect, useState } from 'react'
// import "./banner.css"

// const Banner = () => {
//     const [movie, setMovie] = useState({});
//     useEffect(() =>{
//     (async () =>{
//         try {
//             const request = await axios.get(requests.fetchNetflixOriginals)
//             console.log(request)
//             setMovie(request.date.request[
//                 Math.floor(Math.random() * request.data.results.length)
//             ])
//         }catch (error) {
//             console.log("error", error);
//         }
//     })()
//     },[]);
//     function truncate(str, n){
//         return str?.length > n ? str.substr(0, n - 1) + '...' :str;
//     }
//   return (
//     <div
//     className='banner'
//     style = {{
//         backgroundSize: "cover",
//         backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat"
//     }}
//     >
//         <div className='banner_content'>
//             <h1 className='banner_title'>
//                 {movie?.title || movie?.name || movie?.original_name}
//             </h1>
//             <div className='banner_buttons'>
//                 <button className='banner_button_play'>Play</button>
//                 <button className='banner_button'>My List</button>

//             </div>
//             <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>

//         </div>
//         <div className='banner_fadeBottom' />

//     </div>
//   )
// }

// export default Banner