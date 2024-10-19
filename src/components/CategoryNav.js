import React from 'react';

const CategoryNav = ({ onCategoryChange, searchTerm, setSearchTerm }) => {
  return (
    <div className="category-nav">
      <button onClick={() => onCategoryChange('All')}>All</button>
      <button onClick={() => onCategoryChange('Fruits')}>Fruits</button>
      <button onClick={() => onCategoryChange('Vegetables')}>Vegetables</button>
      <button onClick={() => onCategoryChange('Dairy')}>Dairy</button>
      <button onClick={() => onCategoryChange('Meat')}>Meat</button>
      <button onClick={() => onCategoryChange('Grains')}>Grains</button>

      {/* Search bar input */}
      <input
        type="text"
        placeholder="Search items by name, brand, or store"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        className="search-bar"
      />
    </div>
  );
};

export default CategoryNav;
