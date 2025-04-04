import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    const userData = { email, password };

    try {
      const response = await fetch("http://localhost:5213/api/User/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      alert("Registration successful! Redirecting to login...");
      navigate("/login"); // Redirect to login page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="text-center items-center p-4">
      <Header />
      <div className="m-32">
        <h1 className="text-[#f13a01] font-semibold text-5xl my-8">Register</h1>
        <form onSubmit={handleRegister} className="flex flex-col items-center max-w-sm mx-auto gap-4">
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
            Register
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-gray-400 font-semibold text-[14px]">
            Already have an account? <a href="/login" className="text-[#f13a01]">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
