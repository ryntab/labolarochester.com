import React from "react";

import Menu from "@/components/menu";

export default function MenuPage() {
    const [section, setSection2] = React.useState("menu");

    const setSection = (section) => {
        setSection2(section);
    }

    return(
        <>
        <div className="pt-32 md:pt-48 bg-black md:bg-teal-900 min-h-[100vh]">
            <div className="bg-black text-center text-white p-0 font-serif text-xl mx-auto uppercase flex-wrap sm:flex cursor-pointer">
            <h2 onClick={() => setSection("specials")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Specials</h2>
            <h2 onClick={() => setSection("menu")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Food </h2>
            <h2 onClick={() => setSection("cocktails")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Cocktails</h2>
            <h2 onClick={() => setSection("wine")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Wine </h2>
            <h2 onClick={() => setSection("beer")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Other Beverages </h2>
        </div>
            <div className="text-slate-900 backdrop-blur bg-white/75 bg-cover text-slate-800 md:flex p-4 pt-16 md:justify-center">
                <Menu tab={section}/>
            </div>
        </div>
        </>
    )
}