import React, { useState } from 'react';
import '../Styles/SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [status, setStatus] = useState('');
  const [launch, setLaunch] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    const searchParams = {
      status: typeof status === 'string' ? status.trim().toLowerCase() : '',
      launch: typeof launch === 'string' ? launch.trim().toLowerCase() : '',
      type: typeof type === 'string' ? type.trim().toLowerCase() : '',
    };
    onSearch(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label>
        Status:
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </label>
      <label>
        Original Launch:
        <input type="text" value={launch} onChange={(e) => setLaunch(e.target.value)} />
      </label>
      <label>
        Type:
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
