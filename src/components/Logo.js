import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {

  
  const [isHovered, setIsHovered] = useState(false);
  const handleMouse = () => {
    setIsHovered(!isHovered);
  };

  return (
    <motion.div className='flex items-center justify-between mt-2'>
      <MotionLink
        href="/"
        className={`w-16 h-16 bg-dark text-light flex items-center justify-center
          dark:border-light border border-solid border-transparent
          rounded-full text-2xl font-bold music-div ${isHovered ? 'hovered' : ''}`}
        whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
        }}
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        AR
        {isHovered && (
          <audio autoPlay loop>
            <source src='/music1.mp3' type="audio/mpeg" />
          </audio>
        )}
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
