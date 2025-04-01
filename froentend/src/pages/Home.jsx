import React from "react";

import Hero from "../components/Hero";
import HomeMenu from "../components/HomeMenu";
import SectionHeader from "../components/SectionHeader";
import Cart from "../components/Cart";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
        <Hero />
        <HomeMenu />

        <section id="about" className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
          <SectionHeader subHeader={'Our Story'} mainHeader={'About CloudSlice'} />

          <div className="text-gray-600 max-w-3xl mx-auto flex flex-col gap-6 items-center">
            <p className="text-center md:text-left">
              Founded in 2022, CloudSlice began as a passion project between two culinary 
              innovators who wanted to bring gourmet pizza to homes without the overhead of 
              a traditional restaurant. Our cloud kitchen model allows us to focus entirely 
              on quality and innovation while keeping prices accessible.
            </p>

            <p className="text-center md:text-left">
              We source our ingredients from local farms whenever possible, supporting sustainable 
              agriculture while ensuring the freshest flavors in every bite. Our dough is prepared 
              daily using a proprietary 48-hour fermentation process that creates the perfect 
              balance of chew and crispness.
            </p>

            <p className="text-center md:text-left">
              What sets us apart is our commitment to culinary creativity. Each month, we introduce 
              new specialty pizzas designed by our team or in collaboration with guest chefs from 
              around the city. We're not just delivering food—we're delivering an experience that 
              celebrates the art of pizza-making.
            </p>
          </div>
        </section>

        <section id="contact" className="text-center py-12 px-4 md:px-8 max-w-6xl mx-auto bg-gray-50 rounded-lg">
          <SectionHeader subHeader={"Let's Connect"} mainHeader={'Contact Us'} />
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col items-center md:items-start text-left">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions about our menu, delivery areas, or special events? 
                Reach out to our team and we'll get back to you promptly.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-[#f13a01]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919789683937" className="text-gray-600 hover:text-[#f13a01]">
                    +91 9789 683 937
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-[#f13a01]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@cloudslice.com" className="text-gray-600 hover:text-[#f13a01]">
                    info@cloudslice.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-[#f13a01]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <address className="text-gray-600 not-italic">
                    123 Flavor Street, Foodie District, City - 600001
                  </address>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-left">Operating Hours</h3>
              <div className="space-y-2 text-left">
                <p className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span className="text-gray-600">11:00 AM - 10:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Saturday - Sunday:</span>
                  <span className="text-gray-600">10:00 AM - 11:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Holiday Hours:</span>
                  <span className="text-gray-600">10:00 AM - 9:00 PM</span>
                </p>
                <p className="mt-4 text-gray-600">
                  Order online or through our app for delivery or pickup. We deliver within a 5-mile radius of our kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>
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
                <a href="#" className="text-gray-500 hover:text-[#f13a01]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#f13a01]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#f13a01]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
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
