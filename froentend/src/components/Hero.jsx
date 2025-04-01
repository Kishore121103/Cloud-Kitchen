import React from 'react';
import Right from './icons/right';

const Hero = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 md:px-8 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='flex flex-col justify-center py-4 order-2 md:order-1 text-center md:text-left'>
          <div>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
              Everything <br/>
              is better <br/>
              with a <span className='text-[#f13a01]'> Pizza </span> 
            </h1>
            <p className='my-6 text-gray-500 max-w-md mx-auto md:mx-0'>
              Our cloud kitchen delivers gourmet pizzas crafted with premium ingredients and innovative flavor combinations right to your doorstep.
            </p>
          </div>
       
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm justify-center md:justify-start'>
            <button className='flex items-center gap-2 bg-[#f13a01] rounded-full text-white uppercase px-8 py-3 font-semibold justify-center hover:bg-[#d13400] transition-colors'>
              Order Now
              <Right/>
            </button>

            <button className='flex gap-2 items-center text-gray-600 font-semibold justify-center hover:text-[#f13a01] transition-colors'>
              Learn More
              <Right/>
            </button>
          </div>
        </div>

        <div className='flex justify-center order-1 md:order-2'>
          <img 
            src="/pizza.png" 
            alt="Pizza" 
            className="max-w-full h-auto max-h-[350px] object-contain" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;