import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalItems } = useContext(CartContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="py-4 px-4 md:px-8 border-b sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-[#f13a01] text-2xl font-semibold hover:scale-105 transition-transform">
            CloudSlice Pizza
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-gray-500 font-semibold">
            <Link to='/' className="hover:text-[#f13a01] transition-colors">Home</Link>
            <Link to='/menu' className="hover:text-[#f13a01] transition-colors">Menu</Link>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="hover:text-[#f13a01] transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="hover:text-[#f13a01] transition-colors"
            >
              Contact
            </a>
            <Link to="/cart" className="relative hover:text-[#f13a01]">
              🛒 Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </nav>

          <nav className="hidden md:flex gap-4 items-center text-gray-500 font-semibold">
            {user ? (
              <>
                <span 
                  className="text-[#f13a01] cursor-pointer hover:underline"
                  onClick={handleProfileClick}
                >
                  Hello {user.name || user.email.split('@')[0]}
                </span>
                <button 
                  onClick={handleLogout}
                  className="bg-[#f13a01] text-white rounded-full px-6 py-2 hover:bg-[#d13400] transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to={'/login'} className="hover:text-[#f13a01] transition-colors">Login</Link>
                <Link to={'/register'} className="bg-[#f13a01] text-white rounded-full px-6 py-2 hover:bg-[#d13400] transition-colors">Register</Link>
              </>
            )}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-4 py-4 flex flex-col gap-4 border-t">
            <Link to='/' className="text-gray-500 font-semibold hover:text-[#f13a01]">Home</Link>
            <Link to='/menu' className="text-gray-500 font-semibold hover:text-[#f13a01]">Menu</Link>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
                setMenuOpen(false);
              }}
              className="text-gray-500 font-semibold hover:text-[#f13a01]"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
                setMenuOpen(false);
              }}
              className="text-gray-500 font-semibold hover:text-[#f13a01]"
            >
              Contact
            </a>
            <Link to="/cart" className="text-gray-500 font-semibold hover:text-[#f13a01]">Cart ({getTotalItems()})</Link>
            <div className="flex gap-4 mt-2">
              {user ? (
                <>
                  <span 
                    className="text-[#f13a01] cursor-pointer hover:underline"
                    onClick={() => {
                      handleProfileClick();
                      setMenuOpen(false);
                    }}
                  >
                    Hello {user.name || user.email.split('@')[0]}
                  </span>
                  <button 
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="bg-[#f13a01] text-white rounded-full px-6 py-2 hover:bg-[#d13400] transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to={'/login'} className="text-gray-500 font-semibold hover:text-[#f13a01]">Login</Link>
                  <Link to={'/register'} className="bg-[#f13a01] text-white rounded-full px-6 py-2 hover:bg-[#d13400] transition-colors">Register</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}