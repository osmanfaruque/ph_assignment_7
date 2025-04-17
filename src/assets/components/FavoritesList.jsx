import React from 'react';
import FavoriteItem from './FavoriteItem';

const FavoritesList = ({ favorites, auctionItems, onRemoveFavorite }) => {
  // Get the actual item objects that are favorites
  const favoriteItems = favorites.map(id => auctionItems.find(item => item.id === id));
  
  // Calculate total bid amount
  const totalBidAmount = favoriteItems.reduce((total, item) => total + item.currentBidPrice, 0);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex gap-2 items-center text-xl font-semibold p-4 border-b border-gray-200 text-blue-900">
        <svg className="w-5 h-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span>Favorite Items</span>
      </div>
      
      <div className="p-4">
        {favorites.length === 0 ? (
          <div className="flex flex-col gap-3 justify-center items-center text-center py-4">
            <h1 className="text-xl font-semibold">No favorites yet</h1>
            <p className="text-gray-500 text-sm">Click the heart icon on any item to add it to your favorites</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {favoriteItems.map(item => (
              <FavoriteItem 
                key={item.id} 
                item={item} 
                onRemove={onRemoveFavorite} 
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
        <h3 className="font-semibold">Total bids Amount</h3>
        <p className="font-bold text-blue-900">${totalBidAmount.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default FavoritesList; 