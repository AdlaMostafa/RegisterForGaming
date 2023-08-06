import React from 'react';

const ImageComponent =({ src, alt, className, style })=> {
    return (
    <img 
    src={src}
    alt={alt}
    className={className}
    style={style} />
    )
  }

export default ImageComponent;