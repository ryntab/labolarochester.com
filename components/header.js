import React, { useState } from 'react';
import Link from 'next/link';

import { XIcon, MenuIcon } from '@heroicons/react/outline';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollTo = (event, location) => {
    toggleMenu();
    event.preventDefault();
    const element = document.querySelector(location);
    console.log(document.getElementById("navbar").offsetHeight)
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - (document.getElementById("navbar").offsetHeight * 2),
      behavior: 'smooth' 
    });
  }

  return (
    <>
      <div id="navbar" className="backdrop-blur border-b-2 border-slate-500 max-w-7xl w-full bg-black/75 h-16 md:h-24 flex shadow-2xl shadow-black overflow-visible fixed z-50 justify-content-between">
        <div className="w-1/5 sm:w-2/5 bg-gradient-to-r from-slate-900 flex items-center">
        <button className="text-white text-xl font-semibold pl-8 visible md:invisible w-auto sm:w-0" onClick={toggleMenu}>
  {isMenuOpen ? (
    <XIcon className="h-6 w-6" />
  ) : (
    <MenuIcon className="h-6 w-6" />
  )}
</button>
          <a className="hidden md:block" href="https://www.avvinorochester.com/">
            <img src="./avvino.png" alt="Avvino Logo" className="h-12 w-0 sm:w-auto object-fit mx-8 invisible md:visible" />
          </a>
        </div>
        <div className="w-32 min-w-32 md:h-48 h-32 border-2 mx-auto md:w-48 backdrop-blur -mt-2 bg-black/100 border-slate-500 rounded-b-full shadow-2xl shadow-black ">
            <img alt="La Bola Logo" src="/logo.png" className="object-cover md:mt-8 mt-4 w-20 md:w-32 relative mx-auto overflow-visible"></img>
        </div>
        <div className="flex items-center w-1/5 sm:w-2/5 bg-gradient-to-r from-black/0 to-black">
          <div className={`space-x-4 w-full font-semibold mr-8 font-thin text-slate-100 text-right pl-4 invisible md:visible`}>
            <Link href="/#about" onClick={(e) => scrollTo(e,"#about")} className="hover:border-b-2 py-1 menu">About</Link>
            <Link href="/#contact" onClick={(e) => scrollTo(e,"#contact")} className="hover:border-b-2 py-1 menu">Contact</Link>
            <Link href="/#menu" onClick={(e) => scrollTo(e,"#menu")} className="hover:border-b-2 py-1 menu">Menu</Link>
            <Link href="/#events" onClick={(e) => scrollTo(e,"#events")} className="hover:border-b-2 py-1 menu">Events</Link>
            <Link href="/#events" onClick={(e) => scrollTo(e,"#events")} className="hover:border-b-2 py-1 menu">
            </Link>
          </div>
        </div>
    </div>
    <div className={`fixed w-0 h-0 pl-8 space-y-8 py-8 z-40 w-full bg-black/90 border-b-2 border-slate-500 font-semibold text-slate-100 text-left ${isMenuOpen ? 'pt-24 visible h-auto dropdown-enter dropdown-enter-active' : 'invisible dropdown-exit dropdown-exit-active'} md:invisible`}>
            <Link href="/#about" onClick={(e) => scrollTo(e,"#about")}  className="block menu">About</Link>
            <Link href="/#contact" onClick={(e) => scrollTo(e,"#contact")}  className="block menu">Contact</Link>
            <Link href="/#menu" onClick={(e) => scrollTo(e,"#menu")}  className="block menu">Menu</Link>
            <Link href="/#events" onClick={(e) => scrollTo(e,"#events")}  className="block menu">Events</Link>
    </div>
    </>
  );
}