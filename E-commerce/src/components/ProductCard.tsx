import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Zap, Clock, Truck } from 'lucide-react';
import { Product } from '../types/Product';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  language: string;
  selectedLocation: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, language, selectedLocation }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    addToCart(product);
    setIsLoading(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const deliveryTime = Math.floor(Math.random() * 10) + 10; // 10-20 minutes
  const discountPercent = Math.floor(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 space-y-2">
          {product.fastDelivery && (
            <span className="inline-flex items-center px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
              <Zap size={12} className="mr-1" />
              15-Min
            </span>
          )}
          {discountPercent > 0 && (
            <span className="inline-block px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <Heart
            size={16}
            className={isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'}
          />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            ) : (
              <>
                <ShoppingCart size={16} />
                <span>{language === 'Telugu' ? 'కార్ట్‌కు జోడించు' : 'Add to Cart'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Brand */}
        <div className="text-sm text-gray-500 font-medium">
          {product.brand}
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 leading-5">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Delivery Info */}
        <div className="space-y-2">
          {product.fastDelivery ? (
            <div className="flex items-center space-x-2 text-green-600">
              <Zap size={14} />
              <span className="text-sm font-medium">
                {language === 'Telugu' ? `${deliveryTime} నిమిషాల్లో డెలివరీ` : `Delivery in ${deliveryTime} mins`}
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-blue-600">
              <Truck size={14} />
              <span className="text-sm">
                {language === 'Telugu' ? 'రేపు డెలివరీ' : 'Next day delivery'}
              </span>
            </div>
          )}

          {product.price >= 199 && (
            <div className="flex items-center space-x-2 text-green-600">
              <span className="text-xs bg-green-100 px-2 py-1 rounded-full">
                {language === 'Telugu' ? 'ఉచిత డెలివరీ' : 'FREE Delivery'}
              </span>
            </div>
          )}
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <div className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock 
              ? (language === 'Telugu' ? 'స్టాక్‌లో ఉంది' : 'In Stock')
              : (language === 'Telugu' ? 'స్టాక్ లేదు' : 'Out of Stock')
            }
          </div>
          
          {product.inStock && product.fastDelivery && (
            <div className="flex items-center space-x-1 text-xs text-orange-600">
              <Clock size={12} />
              <span>Live in {selectedLocation}</span>
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock || isLoading}
          className={`w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
            product.inStock
              ? 'bg-orange-600 hover:bg-orange-700 text-white hover:shadow-lg transform hover:scale-105'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
          ) : (
            <>
              <ShoppingCart size={16} />
              <span>
                {!product.inStock
                  ? (language === 'Telugu' ? 'స్టాక్ లేదు' : 'Out of Stock')
                  : (language === 'Telugu' ? 'కార్ట్‌కు జోడించు' : 'Add to Cart')
                }
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;