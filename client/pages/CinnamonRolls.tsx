import { useState } from "react";
import { BookmarkIcon, ChefHatIcon, CalendarIcon, StarIcon, CompassIcon, BookOpenIcon, UtensilsIcon, FolderIcon, UserIcon } from "lucide-react";

export default function CinnamonRolls() {
  const [rating, setRating] = useState(2); // Default to 2 stars as shown in design
  const [activeTab, setActiveTab] = useState("My Recipe");

  const actionButtons = [
    { icon: ChefHatIcon, label: "Cook", onClick: () => console.log("Cook clicked") },
    { icon: BookmarkIcon, label: "Save", onClick: () => console.log("Save clicked") },
    { icon: CalendarIcon, label: "Plan", onClick: () => console.log("Plan clicked") },
  ];

  const navigationTabs = [
    { label: "Explore", icon: CompassIcon },
    { label: "My Recipe", icon: BookOpenIcon },
    { label: "Meal Prep", icon: UtensilsIcon },
    { label: "Resources", icon: FolderIcon },
    { label: "My Account", icon: UserIcon },
  ];

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F3926eabd43b344ad9df061a0f85283e7%2Fdb91feb08e7042c380727446f55936d5?format=webp&width=800')`
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Recipe Content */}
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 pt-12 sm:pt-16">
          {/* Recipe Header */}
          <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-shadow">
                Cinnamon Rolls
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light text-shadow">
                Shepherd and Gibson
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {actionButtons.map((button, index) => {
                const Icon = button.icon;
                return (
                  <button
                    key={button.label}
                    onClick={button.onClick}
                    className="w-full max-w-sm lg:max-w-md glassmorphism text-white py-3 sm:py-4 px-4 sm:px-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/30 transition-all duration-200 text-shadow"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-base sm:text-lg font-medium">{button.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Recipe Description */}
            <div className="max-w-lg lg:max-w-xl">
              <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed">
                Warm, gooey, and ready fast — these quick cinnamon rolls deliver all the classic flavor without the long rise. Perfect for cozy mornings or a sweet gut-friendly treat in under 45 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gray-200">
          {/* Star Rating */}
          <div className="flex justify-center py-3 sm:py-4 border-b border-gray-300">
            <div className="flex gap-1 sm:gap-2">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStarClick(index)}
                  className="transition-colors duration-200 p-1"
                >
                  <StarIcon
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${
                      index < rating
                        ? "text-blue-500 fill-blue-500"
                        : "text-gray-400 fill-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-between items-center px-2 sm:px-4 py-2 sm:py-3">
            {navigationTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex flex-col items-center py-2 px-1 sm:px-2 transition-colors duration-200 min-w-0 flex-1 ${
                    activeTab === tab.label ? "text-blue-500" : "text-gray-600"
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
                  <span className="text-xs font-medium text-center leading-tight">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
