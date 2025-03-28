import React from 'react';
import myImage from "./assets/profilepic.jpg";
import react from "./assets/react.png";
import node from "./assets/node.png";
import express from "./assets/ex.png";
import mongo from "./assets/mongo.jpg";

import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const About = () => {

  const handleDownload = async () => {

    try {
      const response = await axios.get(BASE_URL + "/resume/67e6cf6fdeb34b821aa2f64c", {
        responseType: "blob",
      });
      console.log(response);

      if (!response.data || response.data.size === 0) {
        throw new Error("Empty file received"); // Debugging step
      }
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      // Open in new tab for testing
      window.open(url, "_blank");

      // Download file
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Free memory
      window.URL.revokeObjectURL(url);


    } catch (error) {
      console.log(error);
      alert("Error downloading resume");
    }


  };
  return (
    <div>

      <div className='flex justify-center gap-2  mt-28 '>
        <div className='w-96 h-96 flex justify-center content-center ml-10 '>
          <img src={myImage} className='rounded-3xl border border-neutral-800 object-cover' />
        </div>
        <div>

          <p className='text-xl text-slate-500 text-center'>Hi, I'm <span className='block m-2 items-center text-black text-5xl  font-semibold'>
            Yogesh Basavaraju</span> <span className='text-3xl'>Full Stack developer</span>
            skilled in<br /> React.js, Node.js, Express.js, MongoDB and cloud technologies.<br />
            I love building responsive web apps, writing clean code, and continuously learning. <br />.Always excited to innovate and grow!</p>
          <div className='flex justify-center gap-6 mt-3'>

            <button onClick={handleDownload} className='p-3 bg-white text-black rounded-full border border-gray-950 hover:bg-black hover:text-white hover:opacity-50 transition-opacity duration-700 '>Download Cv</button>
            <Link to="/contact" className='p-3 bg-black text-white rounded-full hover:opacity-50 transition-opacity duration-700 '>contact Info</Link>
          </div>
        </div>
      </div>
      <div className='flex space-x-2 justify-end mr-72 mb-20' >
        <img src={mongo} className='w-28 h-30 object-cover  ' />
        <img src={express} className='w-28 h-30 object-cover   ' />
        <img src={react} className='w-36 h-30  object-cover  ' />
        <img src={node} className='w-28 h-30  object-cover  ' />

      </div>

    </div >
  );
};

export default About;