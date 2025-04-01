import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "./header";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert(`Order placed! Total amount: $${getTotalPrice()}`);
    clearCart();
  };

  return (
    <section>
        <Header/>
        <div className="max-w-4xl mx-auto mt-8 p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                <ul>
                    {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center border-b py-2">
                        <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p>${item.price} x {item.quantity}</p>
                        </div>
                        <div>
                        <button className="px-2 py-1 bg-gray-300 rounded mr-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        {item.quantity}
                        <button className="px-2 py-1 bg-gray-300 rounded ml-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        <button className="ml-4 text-red-500" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </li>
                    ))}
                </ul>
                <div className="mt-4 text-lg">
                    <strong>Total: ${getTotalPrice()}</strong>
                </div>
                <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded" onClick={handleCheckout}>
                    Checkout
                </button>
                </>
            )}
            </div>


    </section>
   
  );
};

export default CartPage;
