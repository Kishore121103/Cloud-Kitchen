import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const UserTabs = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Debugging: Log raw localStorage data
    console.log("Raw localStorage Data:", localStorage.getItem("user"));

    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);

        // Debugging: Log parsed user data
        console.log("Parsed User Data:", userData);

        setUser(userData);

        // Check if user is admin (ensure correct property case)
        setIsAdmin(userData?.isAdmin === true);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [location]); // Re-run when location changes

  return (
    <div className="flex flex-col items-center p-6">
      {user && (
        <div className="text-[#f13a01] text-2xl font-semibold text-center">
          {user.name}
        </div>
      )}

      {isAdmin && (
        <div className="mt-6 flex flex-col gap-4 text-center">
          <Link to="/admin/categories" className="text-gray-700 hover:text-[#f13a01] transition-colors">
            Categories
          </Link>
          <Link to="/admin/menu-items" className="text-gray-700 hover:text-[#f13a01] transition-colors">
            Menu Items
          </Link>
          <Link to="/admin/users" className="text-gray-700 hover:text-[#f13a01] transition-colors">
            Users
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserTabs;
