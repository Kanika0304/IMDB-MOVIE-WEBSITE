import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4 bg-gray-100'>
      <img src='./logo.png' className='w-[70px] transition-transform duration-300 hover:scale-110' alt="Logo" />
      <Link 
        to={'/'}  
        className='text-blue-400 font-bold transition duration-300 hover:text-black hover:underline'
      >
        Movies
      </Link>
      <Link 
        to={'/watchlist'} 
        className='text-blue-400 font-bold transition duration-300 hover:text-black hover:underline'
      >
        WatchList
      </Link>
    </div>
  );
}

export default Navigation;
