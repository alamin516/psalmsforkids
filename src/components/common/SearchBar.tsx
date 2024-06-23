import React, { useState } from 'react';
import '@/styles/searchbar.css'

const SearchPopup: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="mfp-container mfp-inline-holder">
      <div className="mfp-content search-popup">
        <form
          id="search-header"
          onSubmit={handleSubmit}
          name="search-header"
          className="search-form-result"
        >
          <div className="search-form relative overflow-hidden">
            <button
              type="submit"
              className="fa-solid fa-search close-search search-button absolute right-0 top-6 text-gray-700 hover:text-gray-500"
            ></button>
            <input
              name="s"
              id="search-form-66774cde777f8"
              className="search-input focus:outline-none border-none border-b-2 border-white bg-transparent text-2xl font-light p-5 text-white w-full"
              placeholder="Enter your keywords..."
              autoComplete="off"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPopup;
