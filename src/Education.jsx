import React from 'react';
import eduPic from "./assets/Education.jpeg";
import { FaMedal } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <>
      <h1 className='flex justify-center font-semibold text-2xl'>My Education</h1>
      <div className='flex justify-center gap-28  mt-10 '>
        <div className='w-96 h-96 flex justify-center content-center ml-6 mt-10'>
          <img src={eduPic} className='rounded-3xl  object-cover' />
        </div>
        <div>
          <div className='flex  border border-black rounded-xl justify-around text-center p-4 mt-3'>
            <div className='p-4'>
              <FaMedal className='text-3xl' />
            </div>
            <div>
              <h2 className='font-semibold'>Front End Web Development Bootcamp </h2>
              <h3 className='text-slate-700'>OpenClass Room, London, UK</h3>
              <h3 className='text-slate-700'>June 2023 - October 2023 </h3>
            </div>
          </div>
          <div className='flex gap-5 border border-black rounded-xl justify-around  text-center p-4 mt-3'>
            <div className='p-4'>
              <FaMedal className='text-3xl' />
            </div>
            <div>
              <h2 className='font-semibold'>MSc in Software Engineering (Conversion ) </h2>
              <h3 className='text-slate-700'>University of Westminster, London, UK</h3>
              <h3 className='text-slate-700'>September 2021 - October 2022 </h3>
            </div>
          </div>
          <div className='flex gap-2 border border-black rounded-xl justify-around  text-center p-4 mt-3'>
            <div className='p-4'>
              <FaMedal className='text-3xl' />
            </div>
            <div>
              <h2 className='font-semibold'>Bachelor of Engineering <br /> (Mechanical Engineering) </h2>
              <h3 className='text-slate-700'>Visvesvaraya Technological University, India</h3>
              <h3 className='text-slate-700'>August 2015 - June 2019 </h3>
            </div>
          </div>
          <div className='flex gap-5 border border-black rounded-xl justify-around text-center p-4 mt-3'>
            <div className='p-4'>
              <FaMedal className='text-3xl' />
            </div>
            <div>
              <h2 className='font-semibold'>Seshadripuram Pre University college </h2>
              <h3 className='text-slate-700'>Karnataka State Pre-University Board, India </h3>
              <h3 className='text-slate-700'>August 2013 - June 2015 </h3>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className=' grid place-content-center  mb-10 mt-10 '>
        <h1 className='flex justify-center font-semibold text-2xl'>Certifications</h1>
        <div className=' grid place-content-center border border-black rounded-xl w-full text-center items-center   m-3'>
          <div className=' flex p-4 gap-4 text-center items-center'>
            <GiRibbonMedal className='text-5xl' />
            <h2 className='font-semibold'>Namaste React - Certification of Completion – NamasteDev.com</h2>
            <Link to="https://namastedev.com/yogesh/certificates/namaste-react" target="_blank">
              <FaExternalLinkAlt /></Link>

          </div>
          <div className=' flex p-4 gap-4 text-center items-center'>
            <GiRibbonMedal className='text-5xl' />
            <h3 className='font-semibold'>Namaste Node - Certification of Completion – NamasteDev.com </h3>
            <Link to="https://namastedev.com/yogesh/certificates/namaste-node" target="_blank">
              <FaExternalLinkAlt /></Link>

          </div>
        </div>
      </div>

    </>
  );
};

export default Education;