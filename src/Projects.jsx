import React from 'react';
import Pro1 from "./assets/pro1.png";
import tech from "./assets/tech.jpeg";
import reg from "./assets/reg.jpg";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <div className='flex justify-center gap-4 mt-10'>
      <div className='flex flex-col border border-black items-center  w-80 h-auto p-3 rounded-2xl '>
        <div className='flex justify-center items-center  w-64 mt-5 h-auto'>
          <img src={Pro1} className='flex justify-center   rounded-full' />
        </div>
        <h1 className='flex justify-center text-3xl my-4 '>Dev Tinder</h1>
        <div className='flex justify-center gap-6 my-3'>
          <Link to="http://51.21.201.226/" target='_blank' className='flex justify-center p-3 w-32 bg-white text-black rounded-full border border-gray-950 hover:bg-black hover:text-white hover:opacity-50 transition-opacity duration-700 '>Live Demo</Link>
          <Link to="https://github.com/YogeshBasavaraju97/DevTinder" target="_blank" className=' flex justify-center p-3 w-32 bg-white text-black rounded-full border border-gray-950 hover:bg-black hover:text-white hover:opacity-50 transition-opacity duration-700 '>Github </Link>
        </div>
      </div>

      <div className='flex flex-col border border-black items-center  w-80 h-auto p-3 rounded-2xl '>
        <div className='flex justify-center items-center  w-64 mt-5 mb-4 h-auto'>
          <img src={tech} className='flex justify-center w-64 h-64  rounded-3xl object-center' />
        </div>
        <h1 className='flex justify-center text-3xl my-4 '>Tech News</h1>
        <div className='flex justify-center gap-4 my-3'>
          <Link to="https://tech-news-rhr3.vercel.app/" target='_blank' className='flex justify-center p-3 w-32 bg-white text-black rounded-full border border-gray-950 hover:bg-black hover:text-white hover:opacity-50 transition-opacity duration-700 '>Live Demo</Link>
          <Link to="https://github.com/YogeshBasavaraju97/Tech_News" target="_blank" className=' flex justify-center p-3 w-32 bg-white text-black rounded-full border border-gray-950 hover:bg-black hover:text-white hover:opacity-50 transition-opacity duration-700 '>Github </Link>
        </div>
      </div>

      <div className='flex flex-col border border-black items-center  w-80 h-auto p-3 rounded-2xl '>
        <div className='flex justify-center items-center  w-64 mt-5 mb-4 h-auto'>
          <img src={reg} className='flex justify-center w-64 h-64  rounded-3xl object-center' />
        </div>
        <h1 className='flex justify-center text-3xl my-4 '>CRM Application</h1>
        <div className='flex justify-center gap-4 my-3'>
          <Link to="http://16.171.10.246/" target='_blank' className='flex justify-center p-3 w-32 bg-white text-black rounded-full border border-gray-950 hover:bg-black hover:text-white hover:opacity-50 transition-opacity duration-700 '>Live Demo</Link>
          <Link to="https://github.com/YogeshBasavaraju97/CRM_Application_BE" target="_blank" className=' flex justify-center p-3 w-32 bg-white text-black rounded-full border border-gray-950 hover:bg-black hover:text-white hover:opacity-50 transition-opacity duration-700 '>Github </Link>
        </div>
      </div>


    </div>
  );
};

export default Projects;