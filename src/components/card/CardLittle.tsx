import React from 'react'
import { motion } from 'framer-motion'
interface CardLittleProps{
  text:string
  icon:any
  border?:string
  color?:string
}

const CardLittle:React.FC<CardLittleProps> = ({
  text,
  icon: Icon,
  border = 'border-blue-700',
  color = 'black'
}) => {
  return (    
    <motion.div
      drag='x'
      whileFocus={{ scale: 1.2 }}
      dragConstraints={{ left: 10, right: 5 }}
      className={`
        flex sm:flex-col gap-2 text-center items-center justify-center text-xl bg-gray-200 sm:p-3 rounded-2xl  p-8
        hover:cursor-pointer border-b-4 ${border}
      `}
    > {text} <Icon style={{ color, fontSize: '1.5em' }} />
    </motion.div>
  )
}

export default CardLittle
