import { motion } from 'framer-motion'
import React, { useState } from 'react'
interface SliderHorizontalProps {
  text?: string
  bg?: string
}

const SliderHorizontal: React.FC<SliderHorizontalProps> = ({
  text = 'Nuestros ingresantes demuestran nuestra calidad',
}) => {
  const [bgPosition, setbgPosition] = useState(0)
  const listBg = ['bg-blue-900', 'bg-red-900', 'bg-slate-900']

  const handleClickSlider = () => {
    if (bgPosition === 2) {
      setbgPosition(0)
    } else {
      setbgPosition(bgPosition => bgPosition + 1)
    }
  }

  return (
    <motion.div
      onClick={handleClickSlider}
      className={`
      mt-3
      w-full
      h-[70px]
      ${listBg[bgPosition]}
      flex items-center
      justify-center
      sm:text-2xl
      md:text-3xl
      xl:text-4xl
      text-md
      text-white
      text-center
      border-0
      rounded-xl
      
      hover:cursor-pointer
    `}
    >
      {text}
    </motion.div>
  )
}

export default SliderHorizontal
