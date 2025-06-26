import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Amalapuram');
  const [language, setLanguage] = useState('English');

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          language={language}
          setLanguage={setLanguage}
        />
        
        <Banner />
        
        <div className="flex">
          <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          
          <main className="flex-1 p-4 lg:p-6">
            <ProductGrid 
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              selectedLocation={selectedLocation}
              language={language}
            />
          </main>
        </div>
        
        <Footer language={language} />
      </div>
    </CartProvider>
  );
}

export default App;