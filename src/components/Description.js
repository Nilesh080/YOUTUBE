import React, { useState } from 'react';

const Description = ({ publishedAt, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const publishedDate = new Date(publishedAt).toLocaleDateString();
  const truncatedDescription = `${description?.substring(0, 200)}...`;

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 w-[950px]">
      <div className="flex items-center mb-2">
        <h2 className="text-lg font-semibold mr-2">Description</h2>
        <span className="text-gray-500">Published on {publishedDate}</span>
      </div>
      <div className="description-content">
        {showFullDescription ? (
          <p>{description}</p>
        ) : (
          <p>{truncatedDescription}</p>
        )}
      </div>
      <button
        className={`text-blue-500 hover:text-blue-700 transition-colors ${
          showFullDescription ? 'mt-2' : ''
        }`}
        onClick={toggleDescription}
      >
        {showFullDescription ? 'Read less' : 'Read more'}
      </button>
    </div>
  );
};

export default Description