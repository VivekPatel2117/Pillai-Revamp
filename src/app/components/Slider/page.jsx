"use client"
import React, { useState, useRef } from 'react';
export default function Page({ images = [] }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(null);

    const nextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const handleTouchStart = e => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = e => {
        const touchEndX = e.touches[0].clientX;
        const diffX = touchStartX.current - touchEndX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    return (
        <div className="relative" style={{height:"80vh"}} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-black px-4 py-2 rounded" onClick={prevSlide}>
                Prev
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded" onClick={nextSlide}>
                Next
            </button>
            <div className="w-full h-full overflow-hidden">
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="object-contain w-full h-full transition-opacity duration-1000"
                    style={{ opacity: 1 }}
                />
            </div>
        </div>
    );
}
