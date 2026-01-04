import { useNavigate } from 'react-router-dom';

export default function Discover() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/plan');
  };

  return (
    <div className="min-h-screen bg-recipe-bg relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/45c32f382177ed49be0affa08f40d76fd8555c39?width=804')"
        }}
      />
      {/* Overlay for better text readability on larger screens */}
      <div className="absolute inset-0 bg-recipe-bg/80 md:bg-recipe-bg/60" />
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 py-8 md:py-16">
          {/* Title */}
          <h1 className="font-playfair font-bold text-recipe-green text-center mb-8 md:mb-12">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Discover</span>
          </h1>
          {/* Subtitle */}
          <p className="font-montserrat text-black text-center max-w-sm md:max-w-md lg:max-w-lg px-4">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Explore recipes designed to satisfy without the stress.
            </span>
          </p>
        </div>
        {/* Bottom Buttons */}
        <div className="pb-8 px-4 space-y-4">
          {/* Next Button */}
          <button className="w-full max-w-sm mx-auto block bg-recipe-button text-white font-montserrat py-3 px-6 rounded-full text-base md:text-lg hover:bg-recipe-button/90 transition-colors" onClick={handleNextClick}>
            Next
          </button>
          {/* Skip Button */}
          <button className="w-full max-w-sm mx-auto block bg-white/20 backdrop-blur-sm text-black font-montserrat py-3 px-6 rounded-full text-base md:text-lg hover:bg-white/30 transition-colors border border-white/30">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
