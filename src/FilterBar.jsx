import React from 'react';

function FilterBar({ categories, selected, onSelect }) {
  return (
    <div className="filter-bar">
      <button
        className={selected === 'すべて' ? 'active' : ''}
        onClick={() => onSelect('すべて')}
      >
        すべて
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? 'active' : ''}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
