import React from 'react';

interface Params {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}
const Button = ({ children, className, onClick }: Params) => {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
