import React from 'react';

export default function Banner() {
  return (
    <div 
      className='h-[20vh] md:h-[60vh] bg-center  flex items-end transition-all duration-500' 
      style={{
        backgroundImage: 'url(https://media.istockphoto.com/id/1271634353/photo/global-business-network-concept-group-of-businessperson-teamwork-human-resources.jpg?s=612x612&w=0&k=20&c=zSHcRis6OsQ0qF0ANFkLkAsoioN7LUhQsqunKCpD_7w=)',
      }}
    >
<div className="text-white font-bold text-2xl text-center w-full bg-gray-900 bg-opacity-100">
          Hierarchy
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// const banners = [
//   'https://www.istockphoto.com/photo/selfie-out-of-this-world-astronauts-in-futuristic-suits-taking-photo-and-setting-the-gm1361590339-433942787?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmovies-poster&utm_medium=affiliate&utm_source=unsplash&utm_term=movies+poster%3A%3A%3A',
//   'https://www.istockphoto.com/photo/bearded-tattooed-viking-warrior-king-and-prince-in-front-of-warrior-hoard-and-gm1006692370-271685349?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmovie-poster&utm_medium=affiliate&utm_source=unsplash&utm_term=movie+poster%3A%3A%3A',
//   'https://media.istockphoto.com/id/1271634353/photo/global-business-network-concept-group-of-businessperson-teamwork-human-resources.jpg?s=612x612&w=0&k=20&c=zSHcRis6OsQ0qF0ANFkLkAsoioN7LUhQsqunKCpD_7w=',
//   'https://www.istockphoto.com/photo/stylish-afro-girl-portrait-near-pink-blue-neon-light-sign-portrait-in-cool-neon-light-gm1326326351-411072263',
//   'https://www.istockphoto.com/photo/3d-rendered-illustration-of-detective-man-in-hat-gm1387752063-445602153?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmovie-poster&utm_medium=affiliate&utm_source=unsplash&utm_term=movie+poster%3A%3A%3A'
// ];

// export default function Banner() {
//   const [currentBanner, setCurrentBanner] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBanner((prev) => (prev + 1) % banners.length);
//     }, 5000); // Change every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const handlePrevClick = () => {
//     setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
//   };

//   const handleNextClick = () => {
//     setCurrentBanner((prev) => (prev + 1) % banners.length);
//   };

//   return (
//     <div className='relative h-[20vh] md:h-[60vh] bg-center flex items-end transition-all duration-500' 
//       style={{
//         backgroundImage: `url(${banners[currentBanner]})`,
//       }}
//     >
//       <div className="text-white font-bold text-3xl text-center w-full bg-gray-900 bg-opacity-50">
//         Hierarchy
//       </div>
//       <button 
//         onClick={handlePrevClick} 
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2">
//         &lt;
//       </button>
//       <button 
//         onClick={handleNextClick} 
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2">
//         &gt;
//       </button>
//     </div>
//   );
// }
