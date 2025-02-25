import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const MainCard: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={` rounded-lg shadow-lg text-white flex items-center justify-center m-4 bg-amber-800 bg-opacity-30 backdrop-blur-sm p-2 ${className}`}>
      {children}
    </div>
  );
};

export default MainCard;