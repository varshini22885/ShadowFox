import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, language }) => {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert(language === 'Telugu' ? 'ఆర్డర్ విజయవంతంగా పంపబడింది!' : 'Order placed successfully!');
    clearCart();
    setIsCheckingOut(false);
    onClose();
  };

  const deliveryFee = state.total >= 199 ? 0 : 25;
  const finalTotal = state.total + deliveryFee;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {language === 'Telugu' ? 'మీ కార్ట్' : 'Your Cart'} ({state.itemCount})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {language === 'Telugu' ? 'మీ కార్ట్ ఖాళీగా ఉంది' : 'Your cart is empty'}
                </h3>
                <p className="text-gray-500 mb-6">
                  {language === 'Telugu' 
                    ? 'షాపింగ్ ప్రారంభించడానికి కొన్ని ఉత్పత్తులను జోడించండి'
                    : 'Add some products to start shopping'
                  }
                </p>
                <button
                  onClick={onClose}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  {language === 'Telugu' ? 'షాపింగ్ కొనసాగించండి' : 'Continue Shopping'}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.product.brand}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="font-semibold text-gray-900">
                          ₹{item.product.price.toLocaleString('en-IN')}
                        </span>
                        {item.product.originalPrice > item.product.price && (
                          <span className="text-xs text-gray-500 line-through">
                            ₹{item.product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary & Checkout */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-4">
              {/* Delivery Info */}
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-800">
                    {language === 'Telugu' ? 'డెలివరీ ఛార్జీ' : 'Delivery Fee'}
                  </span>
                  <span className={deliveryFee === 0 ? 'text-green-600 font-medium' : 'text-gray-600'}>
                    {deliveryFee === 0 
                      ? (language === 'Telugu' ? 'ఉచితం' : 'FREE') 
                      : `₹${deliveryFee}`
                    }
                  </span>
                </div>
                {state.total < 199 && (
                  <p className="text-xs text-green-700 mt-1">
                    {language === 'Telugu' 
                      ? `₹${199 - state.total} మరింత జోడించి ఉచిత డెలివరీ పొందండి`
                      : `Add ₹${199 - state.total} more for free delivery`
                    }
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>{language === 'Telugu' ? 'మొత్తం' : 'Total'}</span>
                <span>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
              >
                {isCheckingOut ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                ) : (
                  <>
                    <span>
                      {language === 'Telugu' ? 'చెక్‌అవుట్' : 'Proceed to Checkout'}
                    </span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="w-full text-gray-600 hover:text-red-600 py-2 text-sm transition-colors"
              >
                {language === 'Telugu' ? 'కార్ట్ క్లియర్ చేయండి' : 'Clear Cart'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;