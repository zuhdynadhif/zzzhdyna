import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ImageSliderContent } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: ImageSliderContent[];
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
  neumorphismButton: React.CSSProperties;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  neumorphismStyle,
  neumorphismButton
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
    // Function to handle next image
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);
  
  // Function to handle previous image
  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);
    // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [nextImage]);
  
  // Calculate previous and next indices for the hint images
  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % images.length;
  
  return (
    <div 
      className="w-full max-w-3xl mx-auto my-8 px-4"
    >
      <div className="flex items-center justify-center relative">
        {/* Left preview/hint */}
        <div 
          className="absolute left-0 transform -translate-x-1/2 w-16 h-16 cursor-pointer hidden md:block"
          onClick={prevImage} style={neumorphismButton}
        >
          <div className="relative w-full h-full overflow-hidden rounded-full">
            <Image 
              src={images[prevIndex].src}
              alt={`Preview of ${images[prevIndex].alt}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full"
            style={neumorphismButton}
          >
            <ChevronLeft size={40} className="text-black" />
          </div>
        </div>
        
        {/* Main image container */}
        <div 
          className="relative aspect-[16/9] w-full max-w-3xl mx-auto"
          style={neumorphismStyle}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={images[currentIndex].width || 800}
            height={images[currentIndex].height || 500}
            className="rounded-2xl md:rounded-4xl object-contain max-w-full h-auto p-1"
            priority
          />
        </div>
        
        {/* Right preview/hint */}
        <div 
          className="absolute right-0 transform translate-x-1/2 w-16 h-16 cursor-pointer hidden md:block"
          onClick={nextImage}
        >
          <div className="relative w-full h-full overflow-hidden rounded-full">
            <Image 
              src={images[nextIndex].src}
              alt={`Preview of ${images[nextIndex].alt}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full"
            style={neumorphismButton}
          >
            <ChevronRight size={40} className="text-black" />
          </div>
        </div>
      </div>
      
      {/* Mobile navigation controls */}
      <div className="flex justify-center mt-4 space-x-4 md:hidden">
        <button 
          onClick={prevImage}
          className="p-3 rounded-full"
          style={neumorphismButton}
          aria-label="Previous image"
        >
          <ChevronLeft size={20}  className="text-black"/>
        </button>
        <button 
          onClick={nextImage}
          className="p-3 rounded-full"
          style={neumorphismButton}
          aria-label="Next image"
        >
          <ChevronRight size={20}  className="text-black"/>
        </button>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full transition-all ${
              currentIndex === index ? 'bg-gray-500 scale-125' : 'bg-gray-500'
            }`}
            style={currentIndex === index ? undefined : neumorphismButton}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;