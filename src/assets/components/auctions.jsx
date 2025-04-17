import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auctionItems from './AuctionItems.json';
import AuctionItem from './auction';
import FavoritesList from './FavoritesList';

const Auctions = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (itemId) => {
    // Skip if already in favorites
    if (favorites.includes(itemId)) {
      return;
    }

    // Add to favorites
    setFavorites([...favorites, itemId]);
    
    // Show toast notification
    const item = auctionItems.find(item => item.id === itemId);
    toast.success(`${item.title} added to favorites!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const removeFavorite = (itemId) => {
    setFavorites(favorites.filter(id => id !== itemId));
    
    const item = auctionItems.find(item => item.id === itemId);
    toast.info(`${item.title} removed from favorites`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="flex gap-10">
      <div className="w-9/12 bg-white rounded-4xl p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left pb-4 pl-2">Items</th>
              <th className="text-left pb-4">Current Bid</th>
              <th className="text-left pb-4">Time Left</th>
              <th className="text-center pb-4">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {auctionItems.map((item) => (
              <AuctionItem 
                key={item.id}
                item={item}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-3/12">
        <FavoritesList 
          favorites={favorites} 
          auctionItems={auctionItems} 
          onRemoveFavorite={removeFavorite} 
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Auctions;
