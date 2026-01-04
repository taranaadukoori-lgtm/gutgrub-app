import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/ba5dd5b0fb5adf92e23e3b5605c175f4f8745ab8?width=461" 
            alt="GutGrub Logo" 
            className="w-58 h-47 md:w-72 md:h-60 object-contain"
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-gutgrub-dark leading-tight">
            <span className="font-bold">Gut</span>
            <span className="font-normal">Grub</span>
          </h1>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4">
          <button className="w-full bg-gutgrub-green text-white font-montserrat text-sm md:text-base py-3 px-6 rounded-full hover:opacity-90 transition-opacity duration-200" onClick={handleLoginClick}>
            Login
          </button>
          <button className="w-full bg-gutgrub-green text-white font-montserrat text-sm md:text-base py-3 px-6 rounded-full hover:opacity-90 transition-opacity duration-200" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
