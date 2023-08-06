import React from 'react';

const ButtonComponent =({ text, onClick, className, style })=> {
    return (
      <button onClick={onClick} className={className} style={style}>
        {text}
      </button>
    );
  }

export default ButtonComponent;