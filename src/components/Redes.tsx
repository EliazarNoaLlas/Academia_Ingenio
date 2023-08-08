import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaFacebookMessenger } from '@react-icons/all-files/fa/FaFacebookMessenger'
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp'
import { FiPhone } from '@react-icons/all-files/fi/FiPhone'
import { SiTiktok } from '@react-icons/all-files/si/SiTiktok'
import { Link } from 'react-router-dom'

const Redes = () => {
  return (
    <div className='
      hidden
      md:block
      z-11
      fixed
      top-1/3
      right-0
      w-[60px]
      h-[390px]
      b-red
      bg-white
      rounded-tl-full
      rounded-bl-full
      '
    >
      <div className='ml-1 w-full h-full flex flex-col g-3 justify-around items-center p-2'>
        <a href='https://www.facebook.com/profile.php?id=100063746628373'>
          <FaFacebook
            style={{ color: 'blue', fontSize: '2em' }}
            className='hover:border-blue-950 hover:border-b-2 hover:cursor-pointer transition-all'
          />
        </a>
        
        <a href="https://www.facebook.com/messages/t/1860887030835167">
          <FaFacebookMessenger
            style={{ color: 'blue', fontSize: '2em' }}
            className='hover:border-blue-950 hover:border-b-2 hover:cursor-pointer transition-all'
          />
        </a>
        <a href="https://wa.me/+51944703256?text=Me%20interesa%20puedes%20darme%20mas%20informacion!!%20">
          <FaWhatsapp
            style={{ color: 'blue', fontSize: '2em' }}
            className='hover:border-blue-950 hover:border-b-2 hover:cursor-pointer transition-all'
          />
        </a>
        <Link to={'/contact'}>
          <FiPhone
            style={{ color: 'blue', fontSize: '2em' }}
            className='hover:border-blue-950 hover:border-b-2 hover:cursor-pointer'
          />
        </Link>
        <a href="https://www.tiktok.com/@ingenio_ingenio">
          <SiTiktok
            style={{ color: 'blue', fontSize: '2em' }}
            className='hover:border-blue-950 hover:border-b-2 hover:cursor-pointer'
          />  
        </a>
      </div>
    </div>
  )
}

export default Redes
