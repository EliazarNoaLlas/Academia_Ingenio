'use client'
import { FcVoicePresentation } from '@react-icons/all-files/fc/FcVoicePresentation'
import { FaChalkboardTeacher } from '@react-icons/all-files/fa/FaChalkboardTeacher'
import { FaBookReader } from '@react-icons/all-files/fa/FaBookReader'
import { FaRegCheckCircle } from '@react-icons/all-files/fa/FaRegCheckCircle'
import CardLittle from './card/CardLittle'
import { useNavigate } from 'react-router-dom'

interface LogoProp{
  card?:boolean
  absolute?:boolean
}

const Logo:React.FC<LogoProp> = (
  {
    card=false,
    absolute
  }
) => {

  const navegate = useNavigate();

  return (
    <div className={`
    ${absolute ? 'absolute' : 'flex'}
    ${absolute ? 'top-[-10px]' : ''}
    ${absolute ? 'left-[-8px]' : ''}
    sm:flex-row
    flex-col
    justify-between
    alignt-center
    p-4
    
    gap-3
    overflow-x-hidden
    `}
    >
      <img
        onClick={() => navegate('/')}
        src='logo.png'
        alt='ingenio logo'
        className={` 
          ${absolute ? 'md:hidden' : 'hidden'}
          ${absolute ? 'block' : 'md:block'}
          ${absolute ? 'max-w-[200px]' : 'max-w-[290px]'}
          ${absolute ? 'cursor-pointer' : ''}
          ${absolute ? 'hover:bg-[rgba(255,255,255,0.8)]' : ''}
          transition
          w-full
          h-full

          `} />
      {
        card && <>
          <CardLittle
            text='Docentes exigidos'
            icon={FaChalkboardTeacher}
            color='black'
            border='border-slate-900'
          />
          <CardLittle
            text='Presencial al 100%'
            icon={FcVoicePresentation}
          />
          <CardLittle
            text='Material de calidad'
            icon={FaBookReader}
            border='border-yellow-700'
            color='red'
          />
          <CardLittle
            text='Ingresantes asegurados'
            icon={FaRegCheckCircle}
            color='brown'
            border='border-red-800'
          />
          </>
      }

    </div>
  )
}

export default Logo
