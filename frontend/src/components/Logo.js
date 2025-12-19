import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Magnifying glass handle */}
      <path
        d="M50 170 L10 210"
        stroke="#003366"
        strokeWidth="20"
        strokeLinecap="round"
      />
      
      {/* Magnifying glass outer circle */}
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="#003366"
        strokeWidth="12"
        fill="none"
      />
      
      {/* Inner circle background */}
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="white"
      />
      
      {/* Document lines inside magnifying glass */}
      <g transform="translate(100, 100)">
        {/* Top line */}
        <line
          x1="-30"
          y1="-25"
          x2="35"
          y2="-25"
          stroke="#808080"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="-38" cy="-25" r="3" fill="#808080" />
        
        {/* Middle line */}
        <line
          x1="-30"
          y1="0"
          x2="35"
          y2="0"
          stroke="#808080"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="-38" cy="0" r="3" fill="#808080" />
        
        {/* Bottom line */}
        <line
          x1="-30"
          y1="25"
          x2="15"
          y2="25"
          stroke="#808080"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Logo;
