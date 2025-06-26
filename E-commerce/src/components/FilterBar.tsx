import React from 'react';
import { Filter, SortAsc } from 'lucide-react';

interface FilterBarProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  language: string;
}

const FilterBar: React.FC<FilterBarProps> = ({
  sortBy,
  setSortBy,
  showFilters,
  setShowFilters,
  language
}) => {
  const sortOptions = [
    { value: 'relevance', label: language === 'Telugu' ? 'సంబంధిత' : 'Relevance' },
    { value: 'price-low', label: language === 'Telugu' ? 'ధర: తక్కువ నుండి ఎక్కువ' : 'Price: Low to High' },
    { value: 'price-high', label: language === 'Telugu' ? 'ధర: ఎక్కువ నుండి తక్కువ' : 'Price: High to Low' },
    { value: 'rating', label: language === 'Telugu' ? 'రేటింగ్' : 'Rating' },
    { value: 'newest', label: language === 'Telugu' ? 'కొత్తవి' : 'Newest First' }
  ];

  return (
    <div className="flex items-center space-x-4">
      {/* Sort Dropdown */}
      <div className="flex items-center space-x-2">
        <SortAsc size={20} className="text-gray-500" />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Filter Toggle (Mobile) */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
      >
        <Filter size={16} />
        <span className="text-sm font-medium">
          {language === 'Telugu' ? 'ఫిల్టర్లు' : 'Filters'}
        </span>
      </button>

      {/* Quick Filters */}
      <div className="hidden lg:flex items-center space-x-2">
        <button className="px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors">
          15-Min Delivery
        </button>
        <button className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
          Free Delivery
        </button>
        <button className="px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium hover:bg-yellow-200 transition-colors">
          Today's Deals
        </button>
      </div>
    </div>
  );
};

export default FilterBar;