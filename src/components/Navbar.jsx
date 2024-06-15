import React from 'react'
import { navigation } from '../constants'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const pathname = useLocation();

  return (
    <div className='font-pop bg-black w-full px-10 py-10 flex justify-between items-center'>
      <div><h1 className='text-white font-pop font-semibold text-4xl'>Paper Airplanes</h1></div>
      <div className={`nav-items hidden lg:flex top-0 transition-all max-lg:pt-10 left-0 max-lg:flex-col items-center max-lg:min-h-screen max-lg:w-full max-lg:absolute lg:relative lg:flex-row justify-evenly gap-5 font-light lg:font-lg text-3xl lg:text-2xl tracking-wider text-white`}>
        {navigation.map((item) => (
          <a
            id="menuItems"
            key={item.id}
            href={item.url}
            className={`font-pop overflow-hidden ${
              item.url == pathname.hash ? "z-2 text-white" : "text-white/70"
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div><button className='py-3 px-4 text-white font-light bg-orange-500 border-none rounded-full text-3xl lg:text-2xl'>Register</button></div>
    </div>
  )
}

export default Navbar