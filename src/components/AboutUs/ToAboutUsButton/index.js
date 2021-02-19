import React from 'react';

const index = () => {
  return (
    <div>
      <button 
      className="w-1/3 my-4 flex items-center justify-around bg-yellow-500 active:bg-yellow-600 text-gray-700 p-4 lg:text-4xl md:text-3xl text-2xl text-center rounded-xl tracking-widest shadow-lg duration-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
      onClick={()=> {window.location="/about-us";}}>
        About Us
      </button>
    </div>
  );
};

export default index;
