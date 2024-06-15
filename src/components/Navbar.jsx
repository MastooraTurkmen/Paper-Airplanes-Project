import React from 'react'
import { navigation } from '../constants'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const pathname = useLocation();

  return (
    <div className='bg-black w-full'>
      <div className={`nav-items hidden lg:flex top-0 transition-all max-lg:pt-10 left-0 max-lg:flex-col items-center max-lg:min-h-screen max-lg:w-full max-lg:absolute lg:relative lg:flex-row justify-evenly gap-5 font-bold lg:font-lg backdrop-blur-sm text-3xl lg:text-xl tracking-widest max-lg:bg-cyan-500/15 text-white`}>
        {navigation.map((item) => (
          <a
            id="menuItems"
            key={item.id}
            href={item.url}
            className={`font-code overflow-hidden ${
              item.url == pathname.hash ? "z-2 text-white" : "text-white/50"
            } uppercase`}
          >
            {item.title}
          </a>
        ))}
      </div>
      
    </div>
  )
}

export default Navbar