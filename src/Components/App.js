// App.js
import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import SearchForm from './SearchForm';
import DataGrid from './DataGrid';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/capsules');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (status, launch, type) => {
    const filteredData = data.filter((item) => {
      if (
        item.status.toLowerCase().includes(status.toLowerCase()) &&
        item.original_launch.toLowerCase().includes(launch.toLowerCase()) &&
        item.type.toLowerCase().includes(type.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    setData(filteredData);
    setCurrentPage(1); 
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="app">
      <Banner />
      <SearchForm onSearch={handleSearch} />
      <DataGrid
        data={currentItems}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
