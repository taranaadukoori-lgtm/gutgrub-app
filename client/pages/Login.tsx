import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/login-email", {
        email,
        password,
      });
      alert("Login successful! Token: " + res.data.token);
      navigate('/explore');
    } catch (err) {
      alert(err.response?.data?.error || "Login error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-sm sm:max-w-md bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-4 sm:p-6 mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8 mt-2 sm:mt-4">
          <div className="w-28 h-24 sm:w-36 sm:h-30 flex items-center justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f1ca30f319ca0471246243b74245768536eff817?width=292"
              alt="GutGrub Logo"
              className="w-28 h-24 sm:w-36 sm:h-30 object-contain"
            />
          </div>
        </div>

        {/* Brand Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-gray-800 leading-none">
            <span className="font-bold">Gut</span>
            <span className="font-normal">Grub</span>
          </h1>
        </div>

        {/* Login Form */}
        <form className="space-y-4 mb-6" onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-3 py-2.5 sm:py-2 rounded-lg border border-gray-300 bg-gray-500/12 placeholder-gutgrub-text-secondary text-gray-800 font-montserrat text-base sm:text-base focus:outline-none focus:ring-2 focus:ring-gutgrub-green/50 focus:border-gutgrub-green"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2.5 sm:py-2 rounded-lg border border-gray-300 bg-gray-500/12 placeholder-gutgrub-text-secondary text-gray-800 font-montserrat text-base sm:text-base focus:outline-none focus:ring-2 focus:ring-gutgrub-green/50 focus:border-gutgrub-green pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gutgrub-text-secondary hover:text-gray-600 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-left">
            <a 
              href="#" 
              className="text-sm font-montserrat text-gutgrub-text-secondary underline hover:text-gray-600 transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-gutgrub-green hover:bg-gutgrub-green-hover text-white font-montserrat text-base py-3 sm:py-2.5 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gutgrub-green/50" type="submit">
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-5 sm:my-6">
          <div className="flex-1 h-px bg-gray-800"></div>
          <span className="px-3 text-gray-800 font-montserrat text-xl sm:text-2xl font-normal">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-800"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6 sm:mb-8">
          {/* Google Login */}
          <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-montserrat text-base py-2.5 px-4 rounded-full transition-colors duration-200 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-gray-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="hidden sm:inline">Login with Google</span>
            <span className="sm:hidden">Google</span>
          </button>

          {/* Apple Login */}
          <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-montserrat text-base py-2.5 px-4 rounded-full transition-colors duration-200 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-gray-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span className="hidden sm:inline">Login with Apple</span>
            <span className="sm:hidden">Apple</span>
          </button>
        </div>

        {/* Create Account Section */}
        <div className="text-center">
          <p className="text-sm font-montserrat text-gutgrub-text-secondary italic mb-3">
            New Here?
          </p>
          <button
            className="w-full bg-gutgrub-green hover:bg-gutgrub-green-hover text-white font-montserrat text-base py-3 sm:py-2.5 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gutgrub-green/50"
            type="button"
            onClick={() => navigate('/register')}
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}
