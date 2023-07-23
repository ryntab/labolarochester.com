import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="backdrop-blur border-b-2 border-slate-500 max-w-7xl w-full bg-black/75 h-16 md:h-24 flex shadow-2xl shadow-black overflow-visible fixed z-50 justify-content-between">
        <div className="w-1/5 sm:w-2/5 bg-gradient-to-r from-slate-900 flex items-center">
        <button className="text-white text-xl font-semibold pl-8 visible md:invisible w-auto sm:w-0" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </>
            )}
          </button>
          <img src="./avvino.png" className="h-12 w-0 sm:w-auto object-fit mx-8 invisible md:visible" />
        </div>
        <div className="w-32 min-w-32 md:h-48 h-32 border-2 mx-auto md:w-48 backdrop-blur -mt-2 bg-black/100 border-slate-500 /75 rounded-b-full shadow-2xl shadow-black ">
            <img src="/logo.png" className="object-cover md:mt-8 mt-4 w-20 md:w-32 relative mx-auto overflow-visible"></img>
        </div>
        <div className="bg-gradient-to-r from-black/0 to-black/100 flex items-center w-1/5 sm:w-2/5">
        <div className={`w-full font-semibold text-slate-100 text-center pl-4 invisible md:visible`}>
            <a className="px-2">Home</a>
            <a className="px-2">About</a>
            <a className="px-2">Contact</a>
            <a className="px-2">Menu</a>
        </div>
        </div>
    </div>
    <div className={`fixed w-0 h-0 pl-8 space-y-8 py-8 z-40 w-full bg-black/75 font-semibold text-slate-100 text-left ${isMenuOpen ? 'visible h-auto pt-24 dropdown-enter dropdown-enter-active' : 'invisible dropdown-exit dropdown-exit-active'} md:invisible`}>
        <a className="block">Home</a>
        <a className="block">About</a>
        <a className="block">Contact</a>
        <a className="block">Menu</a>
    </div>
    </>
  );
}