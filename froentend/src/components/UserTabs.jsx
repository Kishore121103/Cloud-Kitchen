import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const UserTabs = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        setUser(userData);
        setIsAdmin(userData?.IsAdmin === true || false);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [location]);

  const formatEmail = (email) => {
    if (!email) return '';
    return email.split('@')[0];
  };

  return (
    <div className="flex flex-col items-center p-6">
      {user && (
        <div className="text-[#f13a01] text-5xl font-semibold text-center mb-6">
          Profile
        </div>
      )}

      {isAdmin && (
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <Link 
                to="/admin/categories"
                className="block w-full h-full p-4 text-white text-center rounded-lg bg-[#f13a01] hover:bg-[#e03500] transition-colors"
              >
                Categories
              </Link>
            </div>
            <div className="flex-1 min-w-[200px]">
              <Link 
                to="/admin/menu-items"
                className="block w-full h-full p-4 text-white text-center rounded-lg bg-[#f13a01] hover:bg-[#e03500] transition-colors"
              >
                Menu Items
              </Link>
            </div>
            <div className="flex-1 min-w-[200px]">
              <Link 
                to="/admin/users"
                className="block w-full h-full p-4 text-white text-center rounded-lg bg-[#f13a01] hover:bg-[#e03500] transition-colors"
              >
                Users
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTabs;