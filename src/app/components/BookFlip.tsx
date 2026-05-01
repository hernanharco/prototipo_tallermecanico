import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BookFlipProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

export const BookFlip: React.FC<BookFlipProps> = ({ beforeImage, afterImage, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-10 w-full [perspective:1000px]">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-sm text-blue-600 mt-2 font-medium cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
          (Click para ver el resultado)
        </p>
      </div>

      <div 
        className="relative w-full max-w-2xl h-[400px] cursor-pointer group [perspective:2000px]"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* The "After" Image (Background / Base) */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-r-lg shadow-xl overflow-hidden border border-gray-200">
           <div className="absolute top-4 left-4 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
            DESPUÉS
          </div>
          <ImageWithFallback 
            src={afterImage} 
            alt="After" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* The "Before" Image (Page that flips) */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-white rounded-r-lg shadow-2xl overflow-hidden border border-gray-200 origin-left"
          initial={false}
          animate={{ rotateY: isFlipped ? -160 : 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of the page (Before) */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
              ANTES
            </div>
            <ImageWithFallback 
              src={beforeImage} 
              alt="Before" 
              className="w-full h-full object-cover"
            />
            {/* Page curl gradient/shadow for realism */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Back of the page (White/Texture) */}
          <div 
            className="absolute inset-0 bg-gray-100 [backface-visibility:hidden]" 
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="flex items-center justify-center h-full text-gray-400 font-serif italic text-xl">
              Restauración Completa
            </div>
             <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
      
      <div className="mt-4 flex gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-600 rounded-full"></span> Antes</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-600 rounded-full"></span> Después</span>
      </div>
    </div>
  );
};
