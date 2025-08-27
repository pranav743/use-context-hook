import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = React.memo(({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search users..." 
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
