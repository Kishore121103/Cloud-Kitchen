import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './App.css';
import CartPage from "./components/CartPage";
import Profile from './pages/Profile';
import Categories from './pages/Categories';
import MenuItems from './pages/MenuItems';
import Users from './pages/Users';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';

const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Redirect to login if not authenticated */}
        <Route path="/" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
        <Route path="/menu" element={isAuthenticated() ? <Menu /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated() ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/categories" element={isAuthenticated() ? <Categories /> : <Navigate to="/login" />} />
        <Route path="/menu-items" element={isAuthenticated() ? <MenuItems /> : <Navigate to="/login" />} />
        <Route path="/users" element={isAuthenticated() ? <Users /> : <Navigate to="/login" />} />
        <Route path="/cart" element={isAuthenticated() ? <CartPage /> : <Navigate to="/login" />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
