import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="loading-spinner"></div>
      <span className="ml-2">Loading...</span>
    </div>
  );
};

export default Loading;