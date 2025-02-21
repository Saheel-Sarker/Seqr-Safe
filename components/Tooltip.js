import React from 'react'

export default function Tooltip({ message, children }) {
    return (
      <div className="relative flex group">
        {children}
        <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-800 text-white text-sm rounded py-1 px-2 text-center whitespace-nowrap pointer-events-none">
          {message}
        </span>
      </div>
    );
  }
