import React from 'react';
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='mt-40'>
      <h1 className='flex flex-col items-center'>Get in Touch <br /> <span className='text-3xl font-semibold'>Contact Me</span></h1>
      <div className='flex justify-center mt-20'>
        <div className='flex gap-10'>
          <a href="mailto:yogeshb.0796@gmail.com" className='flex gap-3 items-center text-2xl hover:opacity-45'> <HiMail className='text-3xl' /> yogeshb.0796@gmail.co</a>
          <a href="https://www.linkedin.com/in/soft97/" target="_blank" className='flex gap-3 items-center text-2xl hover:opacity-45'> <FaLinkedinIn className='text-3xl' />LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;