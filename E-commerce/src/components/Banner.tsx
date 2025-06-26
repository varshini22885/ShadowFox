import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Truck, Clock } from 'lucide-react';

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: "15-Minute Lightning Delivery",
      subtitle: "Get your essentials delivered in just 15 minutes!",
      buttonText: "Shop Now",
      bgColor: "from-green-500 to-green-600",
      icon: Zap
    },
    {
      id: 2,
      title: "Free Delivery on ₹199+",
      subtitle: "No delivery charges on orders above ₹199",
      buttonText: "Start Shopping",
      bgColor: "from-blue-500 to-blue-600",
      icon: Truck
    },
    {
      id: 3,
      title: "Today's Super Deals",
      subtitle: "Up to 60% off on electronics and groceries",
      buttonText: "View Deals",
      bgColor: "from-purple-500 to-purple-600",
      icon: Clock
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-orange-100 to-yellow-100 overflow-hidden">
      {/* Main Banner Carousel */}
      <div className="relative h-64 lg:h-80">
        {banners.map((banner, index) => {
          const IconComponent = banner.icon;
          return (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform translate-x-full'
              }`}
            >
              <div className={`h-full bg-gradient-to-r ${banner.bgColor} flex items-center`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <div className="flex items-center space-x-3 mb-4">
                        <IconComponent size={48} className="text-white" />
                        <div>
                          <h1 className="text-3xl lg:text-5xl font-bold mb-2">
                            {banner.title}
                          </h1>
                          <p className="text-lg lg:text-xl opacity-90 mb-6">
                            {banner.subtitle}
                          </p>
                        </div>
                      </div>
                      <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105">
                        {banner.buttonText}
                      </button>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="hidden lg:block">
                      <div className="relative">
                        <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
                        <div className="absolute top-4 left-4 w-24 h-24 bg-white bg-opacity-30 rounded-full animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Secondary Banner - Delivery Areas */}
      <div className="bg-orange-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Now Live in Amalapuram</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Expanding to Malikipuram</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Coming Soon to Lakkavaram</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;