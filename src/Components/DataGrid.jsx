// DataGrid.js
import React from 'react';
import '../Styles/DataGrid.css';

const DataGrid = ({ data, currentPage, totalPages, onPageChange }) => {
  return (
    <div className="data-grid-container">
      <div className="data-grid">
        {data.map((item) => (
          <div className="card" key={item.capsule_id}>
            <h3>{item.status}</h3>
            <p>{item.original_launch}</p>
            <p>{item.type}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DataGrid;
