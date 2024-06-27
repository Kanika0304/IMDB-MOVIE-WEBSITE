import React from 'react';

export default function Banner() {
  return (
    <div 
      className='h-[20vh] md:h-[60vh] bg-center  flex items-end transition-all duration-500' 
      style={{
        backgroundImage: 'url(https://media.istockphoto.com/id/1271634353/photo/global-business-network-concept-group-of-businessperson-teamwork-human-resources.jpg?s=612x612&w=0&k=20&c=zSHcRis6OsQ0qF0ANFkLkAsoioN7LUhQsqunKCpD_7w=)',
      }}
    >
      <div className="relative bottom-0 text-xl md:text-3xl w-full bg-gray-900 bg-opacity-70 font-bold p-2 md:p-3 text-white text-center transition-opacity duration-500 hover:bg-opacity-40">
        Hierarchy
      </div>
    </div>
  );
}
