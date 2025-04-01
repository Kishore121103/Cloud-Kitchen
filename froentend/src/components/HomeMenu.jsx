import React, { useContext } from 'react';
import SectionHeader from "./SectionHeader";
import { CartContext } from '../context/CartContext';

const menuItems = [
  {
    id: 1,
    name: "Margherita Deluxe",
    description: "Fresh mozzarella, basil, and our signature tomato sauce on a thin, crispy crust baked in a wood-fired oven.",
    price: 14.99,
    image: "/pepproni_pizza.png"
  },
  {
    id: 2,
    name: "Pepperoni Feast",
    description: "Double pepperoni layered with extra cheese and our special herb-infused tomato sauce for a classic taste explosion.",
    price: 16.99,
    image: "/pepproni_pizza.png"
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "A garden-fresh medley of bell peppers, mushrooms, onions, black olives, and artichokes on our signature crust.",
    price: 15.99,
    image: "/pepproni_pizza.png"
  },
  {
    id: 4,
    name: "BBQ Chicken",
    description: "Grilled chicken, red onions, and cilantro on a smoky BBQ sauce base, topped with premium mozzarella cheese.",
    price: 17.99,
    image: "/pepproni_pizza.png"
  },
  {
    id: 5,
    name: "Spicy Hawaiian",
    description: "Canadian bacon, pineapple chunks, and jalapeños for a sweet and spicy tropical flavor combination.",
    price: 16.99,
    image: "/pepproni_pizza.png"
  },
  {
    id: 6,
    name: "Meat Lovers",
    description: "The carnivore's delight with pepperoni, sausage, bacon, ham, and ground beef on our hearty tomato sauce.",
    price: 18.99,
    image: "/pepproni_pizza.png"
  }
];

const HomeMenu = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="relative w-full mt-16 mb-8 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Salad Images Positioned Above the Menu Section */}
        <div className="hidden md:flex w-full justify-between absolute top-[-100px] left-0 right-0 overflow-hidden">
            <div className="h-40 w-40 md:h-48 md:w-48 relative z-10">
                <img src="/sallad1.png" alt="Salad 1" className="h-full w-full object-contain" />
            </div>
            <div className="h-40 w-40 md:h-48 md:w-48 relative z-10">
                <img src="/sallad2.png" alt="Salad 2" className="h-full w-full object-contain" />
            </div>
        </div>
        
        {/* Menu Section Header */}
        <SectionHeader subHeader={'CHECK OUT'} mainHeader={'Our Best Sellers'} />
        
        {/* Pizza Menu Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {menuItems.map((item) => (
                <div key={item.id} className='bg-gray-100 p-4 rounded-lg text-center hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                    {/* Pizza Image */}
                    <div className="mb-0">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="mx-auto w-40 md:w-48 transition-transform hover:scale-105"
                        />
                    </div>
                    
                    {/* Pizza Title */}
                    <h4 className='font-semibold text-xl mt-[-5px] mb-2'>{item.name}</h4>
                    
                    {/* Description */}
                    <p className='text-gray-600 text-sm px-2 py-2 h-24 overflow-hidden'>
                        {item.description}
                    </p>
                    
                    {/* Add to Cart Button */}
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
  )
}

export default HomeMenu;