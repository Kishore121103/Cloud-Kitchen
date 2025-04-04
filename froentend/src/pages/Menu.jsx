import React from "react";

import SectionHeader from "../components/SectionHeader";
import MenuCategory from "../components/MenuCategory";

import Cart from "../components/Cart";
import Header from "../components/header";
const Menu = () => {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header/>
        <main className="flex-grow bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
           
            
            <div className="space-y-12">
              <MenuCategory
                title="Pizza"
                items={[
                  { id: 1, name: "Margherita Deluxe", description: "Fresh mozzarella, basil, and our signature tomato sauce.", price: 14.99, image: "/pepproni_pizza.png" },
                  { id: 2, name: "Pepperoni Feast", description: "Double pepperoni with extra cheese and herb-infused tomato sauce.", price: 16.99, image: "/pizza1.png" },
                  { id: 3, name: "Veggie Supreme", description: "Bell peppers, mushrooms, onions, black olives, and artichokes.", price: 15.99, image: "/pizza2.png" },
                  { id: 4, name: "BBQ Chicken", description: "Grilled chicken, red onions, and cilantro on a smoky BBQ sauce.", price: 17.99, image: "/pizza3.png" },
                  { id: 5, name: "Spicy Hawaiian", description: "Canadian bacon, pineapple, and jalapeños.", price: 16.99, image: "/pizza4.png" },
                  { id: 6, name: "Meat Lovers", description: "Pepperoni, sausage, bacon, ham, and ground beef.", price: 18.99, image: "/pizza5.png" }
                ]}
              />
              
              <MenuCategory
                title="Pasta"
                items={[
                  { id: 1, name: "Creamy Alfredo", description: "Classic fettuccine in a rich, creamy alfredo sauce.", price: 12.99, image: "/pasta1.png" },
                  { id: 2, name: "Spaghetti Marinara", description: "Traditional spaghetti with house-made marinara sauce.", price: 11.99, image: "/pasta2.png" },
                  { id: 3, name: "Pesto Penne", description: "Penne pasta tossed in basil pesto with cherry tomatoes.", price: 13.99, image: "/pasta3.png" },
                  { id: 4, name: "Carbonara", description: "Pasta with pancetta, egg, and parmesan cheese.", price: 14.99, image: "/pasta4.png" },
                  { id: 5, name: "Arrabbiata", description: "Spicy tomato-based sauce with garlic and chili flakes.", price: 12.49, image: "/pasta5.png" },
                  { id: 6, name: "Mushroom Truffle", description: "Pasta in a creamy truffle sauce with sautéed mushrooms.", price: 15.49, image: "/pasta6.png" }
                ]}
              />
              
              <MenuCategory
                title="Salad"
                items={[
                  { id: 1, name: "Caesar Salad", description: "Romaine, parmesan, croutons, and creamy caesar dressing.", price: 9.99, image: "/salad1.png" },
                  { id: 2, name: "Greek Salad", description: "Tomatoes, cucumbers, feta cheese, and kalamata olives.", price: 10.49, image: "/salad2.png" },
                  { id: 3, name: "Garden Fresh", description: "Mixed greens, cherry tomatoes, carrots, and balsamic vinaigrette.", price: 8.99, image: "/salad3.png" },
                  { id: 4, name: "Cobb Salad", description: "Grilled chicken, bacon, egg, avocado, and blue cheese dressing.", price: 11.99, image: "/salad4.png" },
                  { id: 5, name: "Spinach & Strawberry", description: "Fresh spinach, strawberries, goat cheese, and honey dressing.", price: 10.99, image: "/salad5.png" },
                  { id: 6, name: "Quinoa Power Bowl", description: "Quinoa, chickpeas, kale, and lemon tahini dressing.", price: 12.99, image: "/salad6.png" }
                ]}
              />
              
              <MenuCategory
                title="Brownies & Desserts"
                items={[
                  { id: 1, name: "Classic Fudge Brownie", description: "Dense, rich, and chocolaty brownies with a crispy top.", price: 6.99, image: "/brownie1.png" },
                  { id: 2, name: "Chocolate Lava Cake", description: "Molten chocolate cake served warm with vanilla ice cream.", price: 8.99, image: "/brownie2.png" },
                  { id: 3, name: "Tiramisu", description: "Italian coffee-flavored layered dessert.", price: 9.49, image: "/brownie3.png" },
                  { id: 4, name: "Cheesecake", description: "Classic New York-style cheesecake with a graham cracker crust.", price: 7.99, image: "/brownie4.png" },
                  { id: 5, name: "Macarons", description: "Assorted French macarons with delicate flavors.", price: 10.99, image: "/brownie5.png" },
                  { id: 6, name: "Fruit Tart", description: "Crispy tart shell filled with vanilla custard and fresh fruit.", price: 9.99, image: "/brownie6.png" }
                ]}
              />
            </div>
          </div>
        </main>
        <footer className="border-t py-8 mt-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-[#f13a01] text-xl font-semibold mb-4">CloudSlice Pizza</h3>
                <p className="text-gray-500">
                  Crafting premium pizzas with innovative flavors, delivered straight from our cloud kitchen to your doorstep.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-500">
                  <li><a href="#" className="hover:text-[#f13a01]">Home</a></li>
                  <li><a href="/menu" className="hover:text-[#f13a01]">Menu</a></li>
                  <li><a href="#about" className="hover:text-[#f13a01]">About Us</a></li>
                  <li><a href="#contact" className="hover:text-[#f13a01]">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  {/* Social media links */}
                </div>
              </div>
            </div>
            <div className="border-t mt-8 pt-6 text-center text-gray-500">
              &copy; {new Date().getFullYear()} CloudSlice Pizza. All rights reserved.
            </div>
          </div>
        </footer>
        <Cart />
      </div>
    );
  };
export default Menu;
