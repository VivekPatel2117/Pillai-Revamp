import React from 'react';
import Image from 'next/image';
const ImageWithHoverText = ({ imageUrl, hoverText }) => {
  return (
    <div className="relative group" id='filter'>
      <Image src={imageUrl} alt="Image" className="w-full"  />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 text-white text-center">
        {hoverText}
      </div>
    </div>
  );
};

export default ImageWithHoverText;
