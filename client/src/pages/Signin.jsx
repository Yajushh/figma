import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       setLoading(true);
  //       setError(false);
  //       const res = await fetch("/api/auth/signup", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });
  //       const data = await res.json();
  //       setLoading(false);
  //       if (data.success === false) {
  //         setError(true);
  //         return;
  //       }
  //       navigate("/");
  //     } catch (error) {
  //       setLoading(false);
  //       setError(true);
  //     }
  //   };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to="/signup">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <p>Go to home</p>
        <Link to="/">
          <span className="text-blue-500">Home Page</span>
        </Link>
      </div>
      <p className="text-red-800">{error && "Something went wrong"}</p>
    </div>
  );
}