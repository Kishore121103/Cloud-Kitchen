import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("user")) {
      // Check if user is logged in before navigating
      return; // Don't navigate if already logged in
    }
  }, []); // Only run on mount

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const loginData = { email, password };

    try {
      const response = await fetch("http://localhost:5213/api/User/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const contentType = response.headers.get("content-type");
      
      let userData;
      if (contentType && contentType.includes("application/json")) {
        userData = await response.json();
      } else {
        userData = { email: email };
      }

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      
      alert("Login successful! Redirecting to home page...");
      navigate("/"); // Only navigate after login success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="text-center items-center p-4">
      <Header />
      <div className="m-32">
        <h1 className="text-[#f13a01] font-semibold text-5xl my-8">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col items-center max-w-sm mx-auto gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border bg-gray-200 border-gray-300 p-2 my-4 rounded-xl w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border bg-gray-200 border-gray-300 p-2 w-full rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="bg-[#f13a01] text-white my-4 px-6 py-2 rounded-full w-full">
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-gray-400 font-semibold text-[14px]">
            Don't have an account? <a href="/register" className="text-[#f13a01]">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
