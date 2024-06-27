import React from 'react';

function Pagination(props) {
  const { pageNumProp, prevPageProp, nextPageProp } = props;

 
  return (
    <div className='flex justify-center my-3 py-3'>
      <div
        onClick={prevPageProp}
        className='border-2 border-r-0 p-2 rounded-l-xl border-black cursor-pointer text-white transform transition duration-200 hover:scale-105 hover:bg-white hover:text-black'
      >
        Prev
      </div>
      <div className='border-2 p-2 border-black cursor-pointer text-white transform transition duration-200 hover:bg-white hover:text-black'>
        {pageNumProp}
      </div>
      <div
        onClick={nextPageProp}
        className='border-2 border-l-0 p-2 rounded-r-xl border-black cursor-pointer text-white transform transition duration-200 hover:scale-105 hover:bg-white hover:text-black'
      >
        Next
      </div>
    </div>
  );
}

export default Pagination;
