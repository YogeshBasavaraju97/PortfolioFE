import React, { useReducer } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';



const Header = () => {

  const location = useLocation();


  return (
    <div className='flex justify-center mt-14 '>

      <div className='flex justify-around gap-96'>
        <Link to="/" className=' font-poppins text-4xl mr-16'>
          Yogesh Basavaraju
        </Link>
        <div className="flex space-x-4 text-2xl items-center">
          {[
            { path: "/", label: "About" },
            { path: "/education", label: "Education" },
            { path: "/project", label: "Projects" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${location.pathname === path ? "text-white bg-black" : "text-black"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Header;