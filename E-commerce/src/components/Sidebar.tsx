import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ShoppingBag, Smartphone, Home, Shirt, Heart, Cpu, Car, BookOpen } from 'lucide-react';

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['groceries']);

  const categories = [
    {
      id: 'all',
      name: 'All Categories',
      telugu: 'అన్ని వర్గాలు',
      icon: ShoppingBag,
      subcategories: []
    },
    {
      id: 'groceries',
      name: 'Groceries',
      telugu: 'కిరాణా సామాగ్రి',
      icon: ShoppingBag,
      subcategories: ['Fresh Vegetables', 'Fruits', 'Dairy & Eggs', 'Rice & Grains', 'Spices & Masalas', 'Snacks & Beverages']
    },
    {
      id: 'mobiles',
      name: 'Mobiles & Electronics',
      telugu: 'మొబైల్స్ & ఎలక్ట్రానిక్స్',
      icon: Smartphone,
      subcategories: ['Smartphones', 'Tablets', 'Laptops', 'Headphones', 'Chargers & Cables', 'Smart Watches']
    },
    {
      id: 'home-kitchen',
      name: 'Home & Kitchen',
      telugu: 'ఇల్లు & వంటగది',
      icon: Home,
      subcategories: ['Kitchen Appliances', 'Home Decor', 'Furniture', 'Cleaning Supplies', 'Storage & Organization']
    },
    {
      id: 'fashion',
      name: 'Fashion',
      telugu: 'ఫ్యాషన్',
      icon: Shirt,
      subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Footwear', 'Accessories', 'Bags & Luggage']
    },
    {
      id: 'personal-care',
      name: 'Personal Care',
      telugu: 'వ్యక్తిగత సంరక్షణ',
      icon: Heart,
      subcategories: ['Health & Wellness', 'Beauty & Cosmetics', 'Hair Care', 'Oral Care', 'Baby Care']
    },
    {
      id: 'electronics',
      name: 'Electronics',
      telugu: 'ఎలక్ట్రానిక్స్',
      icon: Cpu,
      subcategories: ['TV & Audio', 'Cameras', 'Gaming', 'Computer Accessories', 'Smart Home']
    },
    {
      id: 'automotive',
      name: 'Automotive',
      telugu: 'వాహనాలు',
      icon: Car,
      subcategories: ['Car Accessories', 'Bike Accessories', 'Car Care', 'Tools & Equipment']
    },
    {
      id: 'books',
      name: 'Books & Stationery',
      telugu: 'పుస్తకాలు & స్టేషనరీ',
      icon: BookOpen,
      subcategories: ['Books', 'Stationery', 'Art & Craft', 'Educational']
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <aside className="hidden lg:block w-80 bg-white shadow-sm border-r border-gray-200 h-screen overflow-y-auto sticky top-20">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
        
        <div className="space-y-1">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isExpanded = expandedCategories.includes(category.id);
            const isSelected = selectedCategory === category.id;
            
            return (
              <div key={category.id}>
                <button
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    isSelected 
                      ? 'bg-orange-50 text-orange-700 border-l-4 border-orange-500' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    if (category.subcategories.length > 0) {
                      toggleCategory(category.id);
                    }
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent size={18} className={isSelected ? 'text-orange-600' : 'text-gray-500'} />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  
                  {category.subcategories.length > 0 && (
                    <div className="ml-2">
                      {isExpanded ? (
                        <ChevronDown size={16} className="text-gray-400" />
                      ) : (
                        <ChevronRight size={16} className="text-gray-400" />
                      )}
                    </div>
                  )}
                </button>
                
                {/* Subcategories */}
                {isExpanded && category.subcategories.length > 0 && (
                  <div className="ml-8 mt-2 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        className="block w-full text-left p-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                        onClick={() => setSelectedCategory(`${category.id}-${subcategory.toLowerCase().replace(/\s+/g, '-')}`)}
                      >
                        {subcategory}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Quick Filters */}
        <div className="mt-8 p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-3">⚡ 15-Min Delivery</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="text-green-600 focus:ring-green-500" />
              <span className="text-sm text-green-700">Express Delivery Available</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="text-green-600 focus:ring-green-500" />
              <span className="text-sm text-green-700">In Stock Now</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="text-green-600 focus:ring-green-500" />
              <span className="text-sm text-green-700">Free Delivery</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;