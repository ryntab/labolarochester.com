import React, { useEffect, useState } from 'react';

import Menu from '@/components/menu';

export default function Home() {
    const [section, setSection] = React.useState("menu");
    
  return (
    <>
    <div className="bg-slate-100/50 overflow-hidden">
        <div className="w-full bg-center sm:h-auto bg-cover bg-no-repeat font-serif text-lg pt-32 sm:pt-16 md:pt-24" style={{ backgroundImage: `url(/labola.jpg)` }}>
            <div className="h-64 sm:h-0">

            </div>
            <div className="ml-auto w-full sm:w-1/3 bg-black/5 backdrop-blur-sm border-slate-500">
                <div className="bg-gradient-to-r from-slate-900/100 font-semibold p-4 background-blur mb-4 text-left text-white">
                    Light fare restaurant and bar with Spanish & Mediterranean influences in the heart of downtown Rochester.
                </div>
                <div className="bg-gradient-to-l from-slate-900/100 font-semibold p-4 background-blur mb-4 text-right text-white">
                    Seasonal menu with daily specials, rotating sangrias, and specialty cocktails.
                </div>
                <div className="bg-gradient-to-r from-slate-900/100 font-semibold p-4 background-blur mb-4 text-left text-white">
                    Located in the heart of downtown Rochester at the <span className="font-bold underline">Mercantile on Main</span>
                </div>
                <div className="bg-gradient-to-l from-slate-900/100 font-semibold p-4 background-blur font-bold text-right text-white">
                    Join Us for Lunch, Dinner & Cocktails!
                </div>
                <div className="text-center p-4 background-blur font-black text-white py-8">
                    <h1 className="w-full bg-[#074041] text-slate-100 mx-auto py-4 border-2 border-slate-100">Order Now</h1>
                </div>
            </div>
        </div>

        <div className="w-full text-white flex backdrop-blur h-1/6 p-0 bg-white py-2 space-x-2">
            <img className="w-1/3 object-cover" src="/pic1.jpg" alt="Image 1" />
            <img className="w-1/3 object-cover" src="/pic2.jpg" alt="Image 2" />
            <img className="w-1/3 object-cover" src="/pic3.jpg" alt="Image 3" />
        </div>
        <div className="w-full">
            <div className="bg-black/90 text-center text-white p-0 font-serif text-1xl mx-auto uppercase flex-wrap sm:flex cursor-pointer">
                <h1 onClick={() => setSection("specials")} className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Specials</h1>
                <h1 onClick={() => setSection("menu")} className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 bg-white/75 text-black"> Menu</h1>
                <h1 onClick={() => setSection("cocktails")} className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Cocktails</h1>
                <h1 onClick={() => setSection("wine")} className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Wine </h1>
                <h1 onClick={() => setSection("beer")} className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Beer </h1>
            </div>
            <Menu tab={section}/>
        </div>
    </div>
    </>
  )
}
