import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import { Product } from '../types/Product';
import { generateProducts } from '../data/products';

interface ProductGridProps {
  selectedCategory: string;
  searchQuery: string;
  selectedLocation: string;
  language: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  selectedCategory,
  searchQuery,
  selectedLocation,
  language
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      const generatedProducts = generateProducts();
      setProducts(generatedProducts);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory === 'all'
      );
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price range filter
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.brand)
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.dateAdded || 0).getTime() - new Date(a.dateAdded || 0).getTime());
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery, priceRange, selectedBrands, sortBy]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {searchQuery ? `Search results for "${searchQuery}"` : 'All Products'}
          </h2>
          <p className="text-gray-600 mt-1">
            {filteredProducts.length} products found • Delivering to {selectedLocation}
          </p>
        </div>

        <FilterBar
          sortBy={sortBy}
          setSortBy={setSortBy}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          language={language}
        />
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="lg:hidden bg-white border rounded-lg p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            language={language}
            selectedLocation={selectedLocation}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291.974-5.709 2.291" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">
            Try adjusting your search criteria or browse different categories.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;