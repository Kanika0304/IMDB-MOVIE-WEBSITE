import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const movies = [
  { name: 'Inception', genre: 'Sci-Fi' },
  { name: 'Interstellar', genre: 'Sci-Fi' },
  { name: 'The Dark Knight', genre: 'Action' },
  { name: 'Pulp Fiction', genre: 'Crime' },
  { name: 'Fight Club', genre: 'Drama' },
];

const genres = ['All', 'Sci-Fi', 'Action', 'Crime', 'Drama'];

function Navigation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter movies based on search query and selected genre
    if (query.length > 0) {
      const results = movies.filter((movie) => {
        return (
          movie.name.toLowerCase().includes(query.toLowerCase()) &&
          (selectedGenre === 'All' || movie.genre === selectedGenre)
        );
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);

    // Filter movies based on search query and selected genre
    if (searchQuery.length > 0) {
      const results = movies.filter((movie) => {
        return (
          movie.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (genre === 'All' || movie.genre === genre)
        );
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  return (
    <div className='flex items-center justify-between pl-3 py-4 bg-gray-100 border'>
      <div className='flex items-center space-x-8'>
        <img src='./logo.png' className='w-[70px] transition-transform duration-300 hover:scale-110' alt='Logo' />
        <div className='relative flex items-center space-x-2'>
          <select
            value={selectedGenre}
            onChange={handleGenreChange}
            className='border p-2 rounded-md bg-white'
          >
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <input
            type='text'
            value={searchQuery}
            onChange={handleSearchChange}
            className='border p-2 rounded-md w-[300px]'
            placeholder='Search movies...'
          />
          {searchResults.length > 0 && (
            <div className='absolute left-0 mt-2 w-full bg-white border rounded-md shadow-lg'>
              {searchResults.map((result, index) => (
                <div key={index} className='p-2 hover:bg-gray-200 cursor-pointer'>
                  {result.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <Link to='/' className='text-blue-400 font-bold transition duration-300 hover:text-black hover:underline'>
          Movies
        </Link>
        <Link to='/watchlist' className='text-blue-400 font-bold transition duration-300 hover:text-black hover:underline'>
          WatchList
        </Link>
      </div>
      <div className='space-x-2'>
        <button
          onClick={handleLogout}
          className='border border-red-900 text-black-600 font-bold transition duration-300 hover:text-red hover:border-black hover:underline px-3 py-1 rounded-md'
        >
          Sign-in
        </button>
        <button
          onClick={handleLogout}
          className='border border-red-900 text-black-600 font-bold transition duration-300 hover:text-red hover:border-black hover:underline px-3 py-1  rounded-md'
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navigation;
