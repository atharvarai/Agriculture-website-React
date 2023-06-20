import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>Your Agri Help</p>
          <h1 className='font-bold text-5xl md:text-6xl drop-shadow-2xl'>
          Modern farming, powered by innovation
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
          Harvesting nature's bounty for a better tomorrow
          </p>
          <button className='bg-white text-black '>Get Help Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
