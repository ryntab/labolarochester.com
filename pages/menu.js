import React from "react";

import Menu from "@/components/menu";

export default function MenuPage() {
    const [section, setSection2] = React.useState("menu");

    const setSection = (section) => {
        setSection2(section);
    }

    return(
        <div className="bg-teal-900 pt-32 md:pt-48">
            <div className="w-full" id="menu">
                <div className="w-full text-white p-4 md:flex md:justify-end justify-center md:justify-start">
                    <h3 className='text-xl text-black md:mr-4 pt-2 text-center pb-4 md:pb-0 text-white'> Available for delivery and pickup!</h3>
                    <a href="https://order.toasttab.com/online/la-bola-240-e-main-st" className="font-semibold md:font-normal bg-slate-900 font-serif text-xl px-4 p-2 mx-auto md:mx-0 inline-block text-center w-full md:w-auto"> Order Online</a>
                </div>
            </div>
            <div className=" min-h-[100vh] bg-stone-200">
                <div className="bg-black text-center text-white p-0 font-serif text-xl mx-auto uppercase flex-wrap sm:flex cursor-pointer">
                    <h2 onClick={() => setSection("specials")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Specials</h2>
                    <h2 onClick={() => setSection("menu")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Food </h2>
                    <h2 onClick={() => setSection("cocktails")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Cocktails</h2>
                    <h2 onClick={() => setSection("wine")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Wine </h2>
                    <h2 onClick={() => setSection("beer")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Other Beverages </h2>
                </div>
                <div className="text-slate-900 backdrop-blur bg-stone-200 bg-cover text-slate-800 md:flex p-4 pt-16 md:justify-center mx-auto min-h-[100vh]">
                    <Menu tab={section}/>
                </div>
            </div>
        </div>
    )
}