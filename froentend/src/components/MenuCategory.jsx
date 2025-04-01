import React, { useContext } from 'react';
import SectionHeader from "./SectionHeader";
import { CartContext } from '../context/CartContext';

const MenuCategory = ({ category, items }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="relative w-full mt-16 mb-8 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeader subHeader={'Explore'} mainHeader={`Our ${category}`} />
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {items.map((item) => (
          <div key={item.id} className='bg-gray-100 p-4 rounded-lg text-center hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
            <div className="mb-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="mx-auto w-40 md:w-48 transition-transform hover:scale-105"
              />
            </div>
            
            <h4 className='font-semibold text-xl mt-[-5px] mb-2'>{item.name}</h4>
            
            <p className='text-gray-600 text-sm px-2 py-2 h-24 overflow-hidden'>
              {item.description}
            </p>
            
            <button 
              className='bg-[#f13a01] text-white rounded-full px-6 py-2 font-medium mt-2 hover:bg-[#d13400] transition-colors'
              onClick={() => addToCart(item)}
            >
              Add to cart ${item.price}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
