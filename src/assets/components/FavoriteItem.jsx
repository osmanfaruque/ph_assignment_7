import React from 'react';

const FavoriteItem = ({ item, onRemove }) => {
  return (
    <div className="flex justify-between items-center w-full py-3 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <img 
          src={item.image}
          alt={item.title} 
          className="w-12 h-12 object-cover rounded-md"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://source.unsplash.com/100x100/?${item.title.split(' ')[0].toLowerCase()}`;
          }}
        />
        <div className="flex flex-col">
          <h3 className="font-medium text-sm">{item.title}</h3>
          <div className="flex flex-col mt-1">
            <span className="font-semibold text-sm">${item.currentBidPrice.toLocaleString()}</span>
            <span className="text-sm text-gray-500">Bids: {item.bidsCount}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={() => onRemove(item.id)}
        className="text-gray-400 hover:text-red-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default FavoriteItem; 