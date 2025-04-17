import React from 'react';

const AuctionItem = ({ item, isFavorite, onToggleFavorite }) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-4">
        <div className="flex items-center gap-4">
          <img 
            src={item.image}
            alt={item.title} 
            className="w-16 h-16 object-cover rounded-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://source.unsplash.com/100x100/?${item.title.split(' ')[0].toLowerCase()}`;
            }}
          />
          <span className="font-medium">{item.title}</span>
        </div>
      </td>
      <td className="py-4">${item.currentBidPrice.toLocaleString()}</td>
      <td className="py-4">{item.timeLeft} Days left</td>
      <td className="py-4 text-center">
        <button 
          className={`text-gray-500 hover:text-red-500 ${isFavorite ? 'text-red-500 cursor-not-allowed' : ''}`}
          onClick={() => !isFavorite && onToggleFavorite(item.id)}
          disabled={isFavorite}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default AuctionItem;
