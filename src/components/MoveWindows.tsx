import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface MoveWindowsProps{
  children:React.ReactNode
}

const MoveWindows: React.FC<MoveWindowsProps> = ({ children }) => {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  return (
    <div className='relative'>
      <motion.div
        ref={ref}
        style={{
          x: 0,
          y: 0
        }}
        initial={{
          scale: 1,
          originX: 0.5,
          originY: 0.5
        }}
        animate={{
          scale: isHovered ? 1 : 1,
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=' w-full h-full min-h-[100vh] pt-28  top-0 left-0 bg-custom-bg bg-custom-opacity bg-cover transition-all duration-1000' 
      >
        {
        children
      }
      </motion.div>
    </div>
  )
}

export default MoveWindows
