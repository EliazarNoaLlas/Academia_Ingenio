import { Outlet } from "react-router-dom";
import Container from "../common/Container";
import ItemNavbar from "./ItemNavbar";
import { useState } from "react";
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from "../Logo";

interface itemNavbar {
  text: string
  url: string 
  isHidden: boolean
}
const navbarItem: Array<itemNavbar> = [
  {
    text: 'CICLOS',
    url: '/ciclos',
    isHidden: false

  },
  {
    text: 'MATRICULAS',
    url: '/matriculas',
    isHidden: true

  },
  {
    text: 'INGRESANTES',
    url: '/',
    isHidden: false
  },
  // {
  //   text: 'INTERNADO',
  //   url: '/internado',
  //   isHidden: true
  // },
  {
    text: 'CONOCENOS',
    url: '/conocenos',
    isHidden: false
  },
  {
    text: 'CONTACTO',
    url: '/contactos',
    isHidden: true
  }
]
const Navbar = () => {
  
  const [isActive, setIsActive] = useState(false);
  const onClose=()=>{
    setIsActive(false)
  }
  return (
    <>
      <nav className='
      fixed
      w-full
      bg-[rgba(255,255,255,0.9)]
      z-10
      shadow-sm 
      '
      >
        
          <div className={`
          block
          md:hidden
          
          bg-[rgba(255,255,255,0.9)]  
          ${isActive ? 'h-[100vh]' : 'h-auto'}
          ${isActive ? 'py-32' : 'py-10'}
          w-[100%]
          absolute
          z-50
          transition
          `}
            
          >
            <Logo absolute />
            {isActive ?
              <button
                className="
                absolute
                right-6
                top-4
                p-3
                bg-[rgba(0,0,0,0.8)]
                hover:bg-[rgba(0,0,0,0.4)]
                rounded-full
                transition
                text-white
                text-2xl
              "
                onClick={() => setIsActive(false)}
              >
              <FaTimes />
              </button>
              :
              <button
                className="
                absolute
                right-6
                top-4
                p-3
                bg-[rgba(0,0,0,0.8)]
                hover:bg-[rgba(0,0,0,0.4)]
                rounded-full
                transition
                text-white
                text-2xl
              "
                onClick={() => setIsActive(true)}
              >
              <GiHamburgerMenu />
              </button>

            }


            
            <Container>
              <div className='
              w-full
              h-full
              flex
              flex-col
              items-center
              text-sm
              sm:text-xl
              md:text-lg
              
          '
              >

                {
                  isActive &&
                  navbarItem.map((itemNavbar) => (
                    <ItemNavbar
                      isMobile
                      key={itemNavbar.text}
                      text={itemNavbar.text}
                      url={itemNavbar.url}
                      isMobileClick={onClose}
                      
                      // isActivePath={path.pathname === itemNavbar.url}
                    />))
                }

              </div>
            </Container>

          </div>
        
        
        <div className='
          hidden
          md:block
          py-4 border-b-[1px]
            '
        >
          <Container>
            <div className='
            
            flex flex-row items-center justify-between gap-3 md:gap-0 text-sm sm:text-md md:text-lg
          '
            >
              {
                navbarItem.map((itemNavbar) => (
                  <ItemNavbar
                    key={itemNavbar.text}
                    text={itemNavbar.text}
                    url={itemNavbar.url}
                  />))
              }

            </div>
          </Container>

        </div>

      </nav>
      <Outlet />
    </>
  )
};

export default Navbar;
