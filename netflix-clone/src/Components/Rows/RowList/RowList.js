import React from 'react';
import Row from '../Row/Row';
import requests from '../../../utils/requests';

const RowList = () => {
  return (
    <div>
      <Row 
        title="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true}
      />
      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrending} 
      />
      <Row 
        title="Top Rated" 
        fetchUrl={requests.fetchTopRatedMovies} 
      />
      <Row 
        title="Action Movies" 
        fetchUrl={requests.fetchActionMovies} 
      />
      <Row 
        title="Comedy Movies" 
        fetchUrl={requests.fetchComedyMovies} 
      />
      <Row 
        title="Horror Movies" 
        fetchUrl={requests.fetchHorrorMovies} 
      />
      <Row 
        title="Romance Movies" 
        fetchUrl={requests.fetchRomanceMovies} 
      />
      <Row 
        title="Documentaries" 
        fetchUrl={requests.fetchDocumentaries} 
      />
    </div>
  );
};

export default RowList;


// import React from 'react'
// import Row from '../Row/Row'
// import requests from '../../../utils/requests'

// const RowList = () => {
//   return (
//     <>
//     <Row 
//     title = "Netflix Original"
//     fetchUrl = {requests.fetchNetflixOriginals}/>
//     <Row />
//     <Row />
//     <Row />
//     <Row />
//     </>
//   )
// }

// export default RowList