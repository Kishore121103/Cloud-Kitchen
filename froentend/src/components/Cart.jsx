import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { 
    cartItems, 
    isOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    getTotalItems,
    getTotalPrice
  } = useContext(CartContext);

  const navigate = useNavigate();

  const checkCart = () => {
    toggleCart();
    navigate('/cart');
  };

  if (!isOpen) return (
    <button 
      onClick={toggleCart} 
      className="fixed bottom-4 right-4 z-50 bg-[#f13a01] text-white rounded-full p-3 shadow-lg hover:bg-[#d13400] transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {getTotalItems() > 0 && (
        <span className="absolute -top-2 -right-2 bg-white text-[#f13a01] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
          {getTotalItems()}
        </span>
      )}
    </button>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-0">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleCart}></div>
      
      <div className="relative bg-white rounded-t-lg sm:rounded-lg w-full max-w-md max-h-[85vh] overflow-hidden z-10 shadow-xl">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[50vh] p-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Your cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-4 border-b pb-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-[#f13a01] font-semibold">${item.price}</p>
                    
                    <div className="flex items-center mt-2 gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={clearCart}
                className="flex-1 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                Clear Cart
              </button>
              <button 
                onClick={checkCart}
                className="flex-1 py-2 bg-[#f13a01] text-white rounded-md hover:bg-[#d13400] transition-colors"
              >
                Check Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;