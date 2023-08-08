import React from 'react'
import { flushSync } from 'react-dom'
import {Link, useLocation, useNavigate } from 'react-router-dom'
interface ItemNavbarProps{
  text:string
  url:string
  isMobile?:boolean
  isMobileClick?: ()=> void
}

const ItemNavbar:React.FC<ItemNavbarProps> = (
  {
    text,
    url,
    isMobile,
    isMobileClick,
  }) => {
  const path = useLocation();
  
  const navegate = useNavigate();
  const onClick=()=>{
    if (isMobileClick) {
      isMobileClick()
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!(document as any).startViewTransition){
      navegate(url)
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document as any).startViewTransition(()=>
      flushSync(() => navegate(url))
    )

    
  }
  

  return (
    <div
      className={`
        hover:cursor-pointer
        transition
        text-gray-800
        hover:text-gray-400
        ${isMobile ? 'w-full':''}
        ${isMobile ? 'hover:bg-[rgba(76,72,72,0.8)]' : ''}
        ${isMobile ? 'hover:text-gray-100' : ''}
        ${isMobile ? 'py-6' : ''}
        ${isMobile ? 'px-4' : ''}
        ${path.pathname===url ? 'font-semibold': ''}
        sm:block
        text-xl
        `}
      onClick={onClick}
      
    >
      <Link
        to={url}
        onClick={onClick}
      >
        {text}
      </Link>

    </div>
  )
}

export default ItemNavbar
