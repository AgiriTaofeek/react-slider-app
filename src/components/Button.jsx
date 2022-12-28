import React from 'react';

const Button = ({ children, css, onClick }) => {
  return (
    <button onClick={onClick} className={css}>
      {children}
    </button>
  );
};

export default Button;
