import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [hovered, setHovered] = useState('');

  // WatchList handler
  const addToWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    localStorage.setItem('imdb', JSON.stringify(newWatchList));
  };

  const removeFromWatchList = (movie) => {
    const filteredWatchList = watchList.filter((m) => m.id !== movie.id);
    setWatchList(filteredWatchList);
    localStorage.setItem('imdb', JSON.stringify(filteredWatchList));
  };

  // Hovering on movies
  const showButton = (id) => {
    setHovered(id);
  };

  const hideButton = () => {
    setHovered('');
  };

  // Pagination handler
  const onNext = () => {
    setPageNum(pageNum + 1);
  };

  const onPrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  useEffect(() => {
    (function () {
      let moviesFromLS = localStorage.getItem('imdb');
      moviesFromLS = JSON.parse(moviesFromLS) || [];
      setWatchList(moviesFromLS);

      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=43ba5b2a7ee7982f43457a6cd9dcf0bc&page=${pageNum}`).then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
    })();
  }, [pageNum]);

  return (
    <div className="bg-gray-300 ">
    <div className="bg-white shadow-lg rounded-lg  mx-auto  max-w-10xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
  <div className="text-4xl mb-4  font-bold text-center text-gray-800 py-2">
    Trending Movies 🎬
  </div>
</div>
      <div className="flex flex-wrap">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onMouseOver={() => showButton(movie.id)}
            onMouseLeave={hideButton}
            className="w-[160px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[200px] hover:scale-110 duration-300 relative flex items-end"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
            }}
          >
            <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
              {movie.title}
            </div>

            <div
              className="text-2xl p-2 hidden cursor-pointer"
              style={{ display: hovered === movie.id ? 'block' : 'none' }}
            >
              {watchList.find((m) => m.id === movie.id) === undefined ? (
                <div onClick={() => addToWatchList(movie)}>✅</div>
              ) : (
                <div onClick={() => removeFromWatchList(movie)}>❎</div>
              )}
            </div>
          </div>
        ))}
      </div>

     
      <Pagination
        prevPageProp={onPrev}
        pageNumProp={pageNum}
        nextPageProp={onNext}
      />
    </div>
  );
}

export default Movies;
