import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface ItemCarruselProps {
  src: string
  alt: string
}

const ItemCarrusel: React.FC<ItemCarruselProps> = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    // Agrega aquí la lógica adicional para manejar el clic en el componente
  }

  return (
    <div className='flex flex-col gap-1 w-full py-5'>
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          transition: {
            duration: 0.2,
            ease: 'linear'
          }
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} // Manejar el clic en el contenedor del carrusel
        className='aspect-square w-full relative object-cover rounded-xl'
      >
        <img src={src} alt={alt} />
      </motion.div>
    </div>
  )
}

export default ItemCarrusel
