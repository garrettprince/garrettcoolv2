import React from 'react';

const FloatingTooltip = ({ text, position }) => {
  if (!text) return null;
  return (
    <div
      className="absolute bg-gray-800 text-white text-sm py-1 px-2 rounded"
      style={{ top: position.y, left: position.x }}
    >
      {text}
    </div>
  );
};

export default FloatingTooltip;