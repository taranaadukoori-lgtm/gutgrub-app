import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms");
      return;
    }
    try {
      await axios.post('http://localhost:4000/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      alert('Registration successful! You can now log in.');
      navigate('/discover');
    } catch (err) {
      alert(err.response?.data?.error || 'Registration error');
    }
  };
  
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/a5fc3868c696e16570eb03161ebaf1740d0c610a?width=804')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[402px] mx-auto px-4 py-8 flex flex-col items-center">
        
        {/* Logo */}
        <div className="mb-4">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/f1ca30f319ca0471246243b74245768536eff817?width=292"
            alt="GutGrub Logo"
            className="w-[146px] h-[120px] object-contain"
          />
        </div>

        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="font-playfair text-[75px] leading-none text-gutgrub-text">
            <span className="font-bold">Gut</span>
            <span className="font-normal">Grub</span>
          </h1>
        </div>

  {/* Registration Form */}
  <form className="w-full max-w-[370px] space-y-4 mb-6" onSubmit={handleRegister}>
          
          {/* Username Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="w-full px-3 py-2 rounded-[10px] border border-gutgrub-input-border bg-white/100 backdrop-blur-[2px] font-montserrat text-[17px] placeholder:text-gutgrub-placeholder placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-gutgrub-green"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 rounded-[10px] border border-gutgrub-input-border bg-white/100 backdrop-blur-[2px] font-montserrat text-[17px] placeholder:text-gutgrub-placeholder placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-gutgrub-green"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full px-3 py-2 pr-12 rounded-[10px] border border-gutgrub-input-border bg-white/100 backdrop-blur-[2px] font-montserrat text-[17px] placeholder:text-gutgrub-placeholder placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-gutgrub-green"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gutgrub-placeholder"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="w-full px-3 py-2 pr-12 rounded-[10px] border border-gutgrub-input-border bg-white/100 backdrop-blur-[2px] font-montserrat text-[17px] placeholder:text-gutgrub-placeholder placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-gutgrub-green"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gutgrub-placeholder"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 py-2">
            <input
              type="checkbox"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
              className="mt-0.5 w-6 h-6 border-2 border-gutgrub-placeholder rounded-sm bg-transparent checked:bg-gutgrub-green checked:border-gutgrub-green focus:outline-none focus:ring-2 focus:ring-gutgrub-green"
            />
            <label htmlFor="terms" className="font-montserrat text-sm text-gutgrub-placeholder underline">
              I agree to the Terms & Privacy Policy
            </label>
          </div>

          {/* Register Button */}
          <button className="w-full py-3 px-4 bg-gutgrub-green text-white font-montserrat text-[15px] rounded-[40px] hover:opacity-90 transition-opacity" type="submit">
            Register
          </button>
  </form>

        {/* OR Divider */}
        <div className="flex items-center gap-2 w-full max-w-[370px] mb-6">
          <div className="flex-1 h-px bg-gutgrub-text"></div>
          <span className="font-montserrat text-[28px] text-gutgrub-text px-3">OR</span>
          <div className="flex-1 h-px bg-gutgrub-text"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="w-full max-w-[370px] space-y-4 mb-6">
          {/* Google Button */}
          <button className="w-full py-3 px-4 bg-white border border-gray-300 text-gutgrub-text font-montserrat text-[15px] rounded-[40px] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Login with Google
          </button>

          {/* Apple Button */}
          <button className="w-full py-3 px-4 bg-white border border-gray-300 text-gutgrub-text font-montserrat text-[15px] rounded-[40px] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Login with Apple
          </button>
        </div>

        {/* Login Section */}
        <div className="w-full max-w-[370px] space-y-4">
          <p className="text-gutgrub-placeholder font-montserrat text-sm text-center">
            Already a member?
          </p>
          <button
            className="w-full py-3 px-4 bg-gutgrub-green text-white font-montserrat text-[15px] rounded-[40px] hover:opacity-90 transition-opacity"
            type="button"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
