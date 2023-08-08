'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ItemCarrusel from './ItemCarrusel'
import { Iingresantes } from '../../dtype'

interface CarruselProps{
  ingresantes:Iingresantes[]
  isMaxItems?: boolean;
  idDocentes?:boolean
}

const Carrusel: React.FC<CarruselProps> = ({
  ingresantes,
  isMaxItems,
  idDocentes
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: isMaxItems ? 5 : 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: isMaxItems ? 4 : 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: isMaxItems ? 3 : 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: isMaxItems ? 2 : 1
    }
  }
  return (
    <Carousel
      responsive={responsive}
      ssr // means to render carousel on server-side.
      infinite
      autoPlay
      className={` 
        ${idDocentes ? 'md:ml-6' : ''}
      `}
    >
      {
        ingresantes.map((item) =>
        <ItemCarrusel
          key={item.id}
          src={item.src}
          alt={item.alt}
        />)
      }
      

    </Carousel>
  )
}

export default Carrusel
