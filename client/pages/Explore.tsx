import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Mic, ChevronLeft, SlidersHorizontal, Star } from 'lucide-react';

const Explore = () => {
  const navigate = useNavigate();
  // Category icons data
  const categories = [
    { 
      name: 'Dinner', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20H14V18.9L15.25 18.4C16.3333 17.9667 17.2542 17.3625 18.0125 16.5875C18.7708 15.8125 19.3167 14.95 19.65 14H4.35C4.68333 14.95 5.225 15.8125 5.975 16.5875C6.725 17.3625 7.65 17.9667 8.75 18.4L10 18.9V20ZM8 22V20.25C6.21667 19.55 4.77083 18.4667 3.6625 17C2.55417 15.5333 2 13.8667 2 12H4V4L22 2V3.5L10.5 4.8V6.5H22V8H10.5V12H22C22 13.8667 21.4458 15.5333 20.3375 17C19.2292 18.4667 17.7833 19.55 16 20.25V22H8ZM8 6.5H9V4.95L8 5.075V6.5ZM5.5 6.5H6.5V5.25L5.5 5.35V6.5ZM8 12H9V8H8V12ZM5.5 12H6.5V8H5.5V12Z" fill="black"/>
        </svg>
      )
    },
    { 
      name: 'Lunch', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75 21L2.75 19H22.75L20.75 21H4.75ZM3.75 18C3.85 17.7 3.98333 17.4167 4.15 17.15C4.31667 16.8833 4.51667 16.6333 4.75 16.4V9H3.75V7.5H4.75V6.75H3.75V5.25H4.75V4.5H3.75V3H10.75C11.3 3 11.7708 3.19583 12.1625 3.5875C12.5542 3.97917 12.75 4.45 12.75 5V5.25H21.75V6.75H12.75V7C12.75 7.55 12.5542 8.02083 12.1625 8.4125C11.7708 8.80417 11.3 9 10.75 9H8.75V15.1C8.98333 15.1333 9.21667 15.1833 9.45 15.25C9.68333 15.3167 9.9 15.4167 10.1 15.55C10.5333 14.4667 11.225 13.6042 12.175 12.9625C13.125 12.3208 14.175 12 15.325 12C16.825 12 18.1042 12.5125 19.1625 13.5375C20.2208 14.5625 20.75 15.8167 20.75 17.3V18H3.75ZM12.1 16H18.4C18.1167 15.4 17.7 14.9167 17.15 14.55C16.6 14.1833 15.9917 14 15.325 14C14.625 14 13.9833 14.175 13.4 14.525C12.8167 14.875 12.3833 15.3667 12.1 16ZM8.75 5.25H10.75V4.5H8.75V5.25ZM8.75 7.5H10.75V6.75H8.75V7.5ZM6.25 5.25H7.25V4.5H6.25V5.25ZM6.25 7.5H7.25V6.75H6.25V7.5ZM6.25 15.35C6.41667 15.2667 6.57917 15.2042 6.7375 15.1625C6.89583 15.1208 7.06667 15.0833 7.25 15.05V9H6.25V15.35Z" fill="black"/>
        </svg>
      )
    },
    { 
      name: 'Breakfast', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 21.5C5.95 21.5 5.47917 21.3042 5.0875 20.9125C4.69583 20.5208 4.5 20.05 4.5 19.5V10.95C3.88333 10.5833 3.39583 10.0958 3.0375 9.4875C2.67917 8.87917 2.5 8.21667 2.5 7.5C2.5 6.4 2.89167 5.45833 3.675 4.675C4.45833 3.89167 5.4 3.5 6.5 3.5H18.5C19.6 3.5 20.5417 3.89167 21.325 4.675C22.1083 5.45833 22.5 6.4 22.5 7.5C22.5 8.21667 22.3208 8.87917 21.9625 9.4875C21.6042 10.0958 21.1167 10.5833 20.5 10.95V19.5C20.5 20.05 20.3042 20.5208 19.9125 20.9125C19.5208 21.3042 19.05 21.5 18.5 21.5H6.5ZM6.5 19.5H18.5V9.8L19.5 9.2C19.8 9.01667 20.0417 8.775 20.225 8.475C20.4083 8.175 20.5 7.85 20.5 7.5C20.5 6.95 20.3042 6.47917 19.9125 6.0875C19.5208 5.69583 19.05 5.5 18.5 5.5H6.5C5.95 5.5 5.47917 5.69583 5.0875 6.0875C4.69583 6.47917 4.5 6.95 4.5 7.5C4.5 7.86667 4.5875 8.20417 4.7625 8.5125C4.9375 8.82083 5.18333 9.06667 5.5 9.25L6.5 9.8V19.5ZM11.8 17.2C12 17.3833 12.2375 17.475 12.5125 17.475C12.7875 17.475 13.0167 17.3833 13.2 17.2L16.2 14.2C16.4 14 16.5 13.7625 16.5 13.4875C16.5 13.2125 16.4 12.9833 16.2 12.8L13.2 9.8C13.0167 9.6 12.7875 9.5 12.5125 9.5C12.2375 9.5 12 9.6 11.8 9.8L8.8 12.8C8.61667 12.9833 8.525 13.2125 8.525 13.4875C8.525 13.7625 8.61667 14 8.8 14.2L11.8 17.2ZM12.5 15.1L10.9 13.5L12.5 11.9L14.1 13.5L12.5 15.1Z" fill="#1F1F1F"/>
        </svg>
      )
    },
    { 
      name: 'Snack', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.25 23.5V14.5H4.25C3.55 14.5 2.95833 14.2583 2.475 13.775C1.99167 13.2917 1.75 12.7 1.75 12C1.75 11.3 1.99167 10.7083 2.475 10.225C2.95833 9.74167 3.55 9.5 4.25 9.5H6.25V8.5H4.25C3.55 8.5 2.95833 8.25833 2.475 7.775C1.99167 7.29167 1.75 6.7 1.75 6C1.75 5.3 1.99167 4.70833 2.475 4.225C2.95833 3.74167 3.55 3.5 4.25 3.5H6.25V1.5H8.25V3.5H10.25C10.95 3.5 11.5417 3.74167 12.025 4.225C12.5083 4.70833 12.75 5.3 12.75 6C12.75 6.7 12.5083 7.29167 12.025 7.775C11.5417 8.25833 10.95 8.5 10.25 8.5H8.25V9.5H10.25C10.95 9.5 11.5417 9.74167 12.025 10.225C12.5083 10.7083 12.75 11.3 12.75 12C12.75 12.7 12.5083 13.2917 12.025 13.775C11.5417 14.2583 10.95 14.5 10.25 14.5H8.25V23.5H6.25ZM4.25 12.5H10.25C10.3833 12.5 10.5 12.45 10.6 12.35C10.7 12.25 10.75 12.1333 10.75 12C10.75 11.8667 10.7 11.75 10.6 11.65C10.5 11.55 10.3833 11.5 10.25 11.5H4.25C4.11667 11.5 4 11.55 3.9 11.65C3.8 11.75 3.75 11.8667 3.75 12C3.75 12.1333 3.8 12.25 3.9 12.35C4 12.45 4.11667 12.5 4.25 12.5ZM4.25 6.5H10.25C10.3833 6.5 10.5 6.45 10.6 6.35C10.7 6.25 10.75 6.13333 10.75 6C10.75 5.86667 10.7 5.75 10.6 5.65C10.5 5.55 10.3833 5.5 10.25 5.5H4.25C4.11667 5.5 4 5.55 3.9 5.65C3.8 5.75 3.75 5.86667 3.75 6C3.75 6.13333 3.8 6.25 3.9 6.35C4 6.45 4.11667 6.5 4.25 6.5ZM15.25 23.5V21.5H17.25V14.35C16.3667 14.1167 15.6458 13.6458 15.0875 12.9375C14.5292 12.2292 14.25 11.4167 14.25 10.5V1.5H22.25V10.5C22.25 11.4167 21.9708 12.2292 21.4125 12.9375C20.8542 13.6458 20.1333 14.1167 19.25 14.35V21.5H21.25V23.5H15.25ZM18.25 12.5C18.8 12.5 19.2708 12.3042 19.6625 11.9125C20.0542 11.5208 20.25 11.05 20.25 10.5V8.5H16.25V10.5C16.25 11.05 16.4458 11.5208 16.8375 11.9125C17.2292 12.3042 17.7 12.5 18.25 12.5ZM16.25 6.5H20.25V3.5H16.25V6.5Z" fill="#1F1F1F"/>
        </svg>
      )
    },
    { 
      name: 'Dessert', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.05 23.5L7.35 14.5C6.16667 14.55 5.14583 14.2083 4.2875 13.475C3.42917 12.7417 3 11.75 3 10.5C3 9.65 3.24583 8.88333 3.7375 8.2C4.22917 7.51667 4.85 7.03333 5.6 6.75C5.9 5.23333 6.64583 3.97917 7.8375 2.9875C9.02917 1.99583 10.4167 1.5 12 1.5C13.5833 1.5 14.9708 1.99583 16.1625 2.9875C17.3542 3.97917 18.1 5.23333 18.4 6.75C19.15 7.03333 19.7708 7.51667 20.2625 8.2C20.7542 8.88333 21 9.65 21 10.5C21 11.75 20.5583 12.7417 19.675 13.475C18.7917 14.2083 17.8 14.55 16.7 14.5L12.05 23.5ZM7 12.5C7.25 12.5 7.49583 12.4583 7.7375 12.375C7.97917 12.2917 8.2 12.15 8.4 11.95L8.95 11.4L9.6 11.8C9.95 12.0333 10.3292 12.2083 10.7375 12.325C11.1458 12.4417 11.5667 12.5 12 12.5C12.4333 12.5 12.8542 12.4417 13.2625 12.325C13.6708 12.2083 14.05 12.0333 14.4 11.8L15.05 11.4L15.6 11.95C15.8 12.15 16.0208 12.2917 16.2625 12.375C16.5042 12.4583 16.75 12.5 17 12.5C17.55 12.5 18.0208 12.3042 18.4125 11.9125C18.8042 11.5208 19 11.05 19 10.5C19 10 18.8417 9.5625 18.525 9.1875C18.2083 8.8125 17.8 8.58333 17.3 8.5L16.55 8.4L16.5 7.6C16.4167 6.45 15.9417 5.47917 15.075 4.6875C14.2083 3.89583 13.1833 3.5 12 3.5C10.8167 3.5 9.79167 3.89583 8.925 4.6875C8.05833 5.47917 7.58333 6.45 7.5 7.6L7.45 8.4L6.7 8.55C6.2 8.65 5.79167 8.875 5.475 9.225C5.15833 9.575 5 10 5 10.5C5 11.05 5.19583 11.5208 5.5875 11.9125C5.97917 12.3042 6.45 12.5 7 12.5ZM12.05 19.15L14.75 13.9C14.35 14.1 13.9167 14.25 13.45 14.35C12.9833 14.45 12.5 14.5 12 14.5C11.55 14.5 11.0958 14.45 10.6375 14.35C10.1792 14.25 9.73333 14.1 9.3 13.9L12.05 19.15Z" fill="#1F1F1F"/>
        </svg>
      )
    }
  ];

  // Food card data
  const recentlyViewed = [
    {
      id: 1,
      title: "Cinnamon Rolls",
      category: "Dessert",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/77b60945cde5ff0720fe170d9758e66888868337?width=400"
    },
    {
      id: 2,
      title: "Egg Salad",
      category: "Lunch", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/008a870a9e72130c23139db4ce877793c26856ef?width=400"
    }
  ];

  const dinnerItems = [
    {
      id: 3,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5d346c714236477cb91ec617eca1f684a889c39b?width=400"
    },
    {
      id: 4,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4f6f1c683be24d3696516262736746c3fcf5947e?width=400"
    },
    {
      id: 5,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/348bed5b6159f781a7594dbc862b7c626d0ad2f6?width=400"
    },
    {
      id: 6,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/185b94a86421ce8e279f60ea78664850ece2ce82?width=400"
    }
  ];

  const breakfastItems = [
    {
      id: 7,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/25bbb6637b6c93fa6ace1770c2001add7ad0f25a?width=400"
    },
    {
      id: 8,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/43826bcd935540869bc72832757e7d02bd0a7cc1?width=400"
    },
    {
      id: 9,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9a41707cb1981ca51a23585ac733ace919dd5c3a?width=400"
    },
    {
      id: 10,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/18d1a02544baf996e8cac55902ad541c8a2ecdf4?width=400"
    }
  ];

  const tabItems = [
    { name: "Explore", icon: Star, active: true },
    { name: "My Recipe", icon: Star, active: false },
    { name: "Meal Prep", icon: Star, active: false },
    { name: "Resources", icon: Star, active: false },
    { name: "My Account", icon: Star, active: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Phone Container */}
      <div className="max-w-md mx-auto relative bg-white">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 pt-6 pb-4 bg-white/75 backdrop-blur-md border-b border-black/10">
          <div className="font-sf-pro text-[17px] font-semibold text-black">9:41</div>
          <div className="w-[124px] h-[10px]"></div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-black/30 rounded-full"></div>
            </div>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
              <rect x="1" y="1" width="21" height="9" rx="2.5" stroke="black" strokeWidth="1"/>
              <rect x="2.5" y="2.5" width="18" height="6" rx="1.5" fill="black"/>
              <path d="M24 4V8C24.8 7.7 25.3 7 25.3 6.2C25.3 5.4 24.8 4.7 24 4.4V4Z" fill="black" fillOpacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* Navigation Header */}
        <div className="px-4 py-3 bg-white/75 backdrop-blur-md border-b border-black/10">
          <div className="flex items-center justify-between mb-3">
            {/* Back Button */}
            <div className="flex items-center gap-2">
              <ChevronLeft className="w-5 h-5 text-ios-blue" />
              <span className="font-sf-pro text-[17px] text-ios-blue">Back</span>
            </div>
            
            {/* Filter Button */}
            <SlidersHorizontal className="w-6 h-6 text-black" />
          </div>

          {/* Title */}
          <h1 className="font-sf-pro text-[34px] font-bold text-black mb-4">Explore</h1>

          {/* Search Bar */}
          <div className="flex items-center gap-3 px-3 py-2 bg-gray-200/50 rounded-lg">
            <Search className="w-5 h-5 text-gray-500" />
            <span className="font-sf-pro text-[17px] text-gray-500 flex-1">Search</span>
            <Mic className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 py-4 space-y-6">
          {/* Category Icons */}
          <div className="flex justify-between items-center">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-[51px] h-[51px] bg-gray-300 rounded-full flex items-center justify-center">
                  {category.icon}
                </div>
                <span className="font-montserrat text-xs text-black text-center">{category.name}</span>
              </div>
            ))}
          </div>

          {/* Recently Viewed Section */}
          <div className="space-y-4">
            <h2 className="font-dm-serif text-[32px] text-black">Recently Viewed</h2>
            <div className="flex gap-4 overflow-x-auto">
              {recentlyViewed.map((item) => (
                <div key={item.id} className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-[175px] h-[240px] object-cover rounded-2xl cursor-pointer"
                      onClick={() => {
                        if (item.title === "Cinnamon Rolls") {
                          navigate("/cinnamonrolls");
                        }
                      }}
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <h3 className="font-dm-serif text-lg font-bold text-black">{item.title}</h3>
                      <p className="font-sf-pro text-sm text-gray-600">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dinner Section */}
          <div className="space-y-4">
            <h2 className="font-dm-serif text-[32px] text-black">Dinner</h2>
            <div className="grid grid-cols-2 gap-4">
              {dinnerItems.map((item) => (
                <div key={item.id} className="rounded-2xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt="Dinner dish"
                    className="w-full h-[150px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Breakfast Section */}
          <div className="space-y-4 pb-24">
            <h2 className="font-dm-serif text-[32px] text-black">Breakfast</h2>
            <div className="grid grid-cols-2 gap-4">
              {breakfastItems.map((item) => (
                <div key={item.id} className="rounded-2xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt="Breakfast dish"
                    className="w-full h-[150px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tab Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white/75 backdrop-blur-md border-t border-black/10">
          <div className="flex justify-around items-center py-2">
            {tabItems.map((tab, index) => (
              <div key={index} className="flex flex-col items-center gap-1 py-1 px-4">
                <Star className={`w-5 h-5 ${tab.active ? 'text-ios-blue' : 'text-gray-400'}`} />
                <span className={`font-sf-pro text-[10px] ${tab.active ? 'text-ios-blue' : 'text-gray-400'}`}>
                  {tab.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
