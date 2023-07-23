import React, { useEffect } from 'react';

export default function Home() {
  return (
    <>
    <div className="bg-slate-100/50">
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
            <div className="bg-black/90 text-center text-white p-0 font-serif text-1xl mx-auto uppercase flex-wrap sm:flex">
                <h1 className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Specials</h1>
                <h1 className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 bg-white/75 text-black"> Menu</h1>
                <h1 className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Cocktails</h1>
                <h1 className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Wine </h1>
                <h1 className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Beer </h1>
            </div>
            <div className="text-slate-900 bg-white/75 text-slate-800 lg:flex p-4 pt-16">
                <div className="lg:w-1/3 font-serif text-center">
                    <h1 className="text-2xl mb-8 font-semibold"> TAPAS </h1>
                    <h2 className="font-semibold"> CHARCUTERIE <b className="ml-2 font-bold">20/35</b></h2>
                    <p className="mb-4"> Rotating Cheeses & Cured Meats, Quince Paste, Marcona Almonds, Olives, Spicy Mustard, House-Made Breads </p>
                    <h2 className="font-semibold"> HTIPITI <b className="ml-2 font-bold">11</b></h2>
                    <p className="mb-4"> Roasted Red Pepper & Feta Dip, Olives, House-Made Pita </p>
                    <h2 className="font-semibold"> WARM BREAD <b className="ml-2 font-bold">7</b></h2>
                    <p className="mb-4"> Gus's Daily Bread Selection, Tomato Spread, Salt </p>
                    <h2 className="font-semibold uppercase"> Ricotta Toast <b className="ml-2 font-bold">10</b></h2>
                    <p className="mb-4"> Local Honey, Spanish Olive Oil, Sea Salt, Herbs </p>
                    <h2 className="font-semibold uppercase"> Potatas Bravas <b className="ml-2 font-bold">9</b></h2>
                    <p className="mb-4"> Smashed Fingerling Potatoes, Garlic, Lemon Aioli, Bravas Sauce </p>
                    <h2 className="font-semibold uppercase"> Harissa Roasted Heirloom Carrots <b className="ml-2 font-bold">11</b></h2>
                    <p className="mb-4"> Roasted Red Pepper & Feta Dip, Olives, House-Made Pita </p>
                    <h2 className="font-semibold uppercase"> Imported Conservas <b className="ml-2 font-bold lowercase">Mkt. / tin</b></h2>
                    <p className="mb-4"> Cockles, Octopus, Razor Clams or Scallops </p>
                </div>
                <div className="lg:w-1/3 font-serif text-center mt-16 lg:mt-0 px-4">
                    <h1 className=" text-2xl mb-8 font-semibold"> HOT PRESSED SANDWICHES</h1>
                    <h2 className="font-semibold"> CHARCUTERIE <b className="ml-2 font-bold">20/35</b></h2>
                    <p className="mb-4"> Rotating Cheeses & Cured Meats, Quince Paste, Marcona Almonds, Olives, Spicy Mustard, House-Made Breads </p>
                    <h2 className="font-semibold"> HTIPITI <b className="ml-2 font-bold">11</b></h2>
                    <p className="mb-4"> Roasted Red Pepper & Feta Dip, Olives, House-Made Pita </p>
                    <h2 className="font-semibold"> WARM BREAD <b className="ml-2 font-bold">7</b></h2>
                    <p className="mb-4"> Gus's Daily Bread Selection, Tomato Spread, Salt </p>
                    <h2 className="font-semibold uppercase"> Ricotta Toast <b className="ml-2 font-bold">10</b></h2>
                    <p className="mb-4"> Local Honey, Spanish Olive Oil, Sea Salt, Herbs </p>
                    <h2 className="font-semibold uppercase"> Potatas Bravas <b className="ml-2 font-bold">9</b></h2>
                    <p className="mb-4"> Smashed Fingerling Potatoes, Garlic, Lemon Aioli, Bravas Sauce </p>
                    <h2 className="font-semibold uppercase"> Harissa Roasted Heirloom Carrots <b className="ml-2 font-bold">11</b></h2>
                    <p className="mb-4"> Roasted Red Pepper & Feta Dip, Olives, House-Made Pita </p>
                    <h2 className="font-semibold uppercase"> Imported Conservas <b className="ml-2 font-bold lowercase">Mkt. / tin</b></h2>
                    <p className="mb-4"> Cockles, Octopus, Razor Clams or Scallops </p>
                </div>
                <div className="lg:w-1/3 mt-16 lg:mt-0 font-serif text-center">
                    <h1 className=" text-2xl mb-8 font-semibold"> MORE </h1>
                    <h2 className="font-semibold"> CHARCUTERIE <b className="ml-2 font-bold">20/35</b></h2>
                    <p className="mb-4"> Rotating Cheeses & Cured Meats, Quince Paste, Marcona Almonds, Olives, Spicy Mustard, House-Made Breads </p>
                    <h2 className="font-semibold"> HTIPITI <b className="ml-2 font-bold">11</b></h2>
                    <p className="mb-4"> Roasted Red Pepper & Feta Dip, Olives, House-Made Pita </p>
                    <h2 className="font-semibold"> WARM BREAD <b className="ml-2 font-bold">7</b></h2>
                    <p className="mb-4"> Gus's Daily Bread Selection, Tomato Spread, Salt </p>
                    <h2 className="font-semibold uppercase"> Ricotta Toast <b className="ml-2 font-bold">10</b></h2>
                    <p className="mb-4"> Local Honey, Spanish Olive Oil, Sea Salt, Herbs </p>
                    <h2 className="font-semibold uppercase"> Potatas Bravas <b className="ml-2 font-bold">9</b></h2>
                    <p className="mb-4"> Smashed Fingerling Potatoes, Garlic, Lemon Aioli, Bravas Sauce </p>
                    <h2 className="font-semibold uppercase"> Harissa Roasted Heirloom Carrots <b className="ml-2 font-bold">11</b></h2>
                    <p className="mb-4"> Roasted Red Pepper & Feta Dip, Olives, House-Made Pita </p>
                    <h2 className="font-semibold uppercase"> Imported Conservas <b className="ml-2 font-bold lowercase">Mkt. / tin</b></h2>
                    <p className="mb-4"> Cockles, Octopus, Razor Clams or Scallops </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
