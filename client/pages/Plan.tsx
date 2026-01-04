export default function Plan() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/565a4630c168dd7fe88f76f180a336b855a3703e?width=804')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-4 py-8 md:px-8 lg:px-12">
        {/* Top spacing */}
        <div className="flex-1"></div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
          {/* Title */}
          <h1 className="font-playfair text-plan-green text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12">
            Plan
          </h1>
          
          {/* Subtitle */}
          <p className="font-montserrat text-black text-xl md:text-2xl lg:text-3xl leading-relaxed px-2">
            Build your grocery list and set your cooking schedule — so your gut stays happy all week long.
          </p>
        </div>
        
        {/* Bottom Buttons */}
        <div className="flex flex-col gap-4 max-w-sm mx-auto w-full mt-8">
          {/* Next Button */}
          <button className="bg-button-green text-white font-montserrat text-base py-4 px-8 rounded-full hover:bg-button-green/90 transition-colors duration-200 shadow-lg">
            Next
          </button>
          
          {/* Skip Button */}
          <button className="bg-white/80 text-gray-700 font-montserrat text-base py-4 px-8 rounded-full border border-gray-300 hover:bg-white transition-colors duration-200 shadow-lg backdrop-blur-sm">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}