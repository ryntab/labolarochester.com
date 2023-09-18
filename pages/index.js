import React, { useEffect, useState } from 'react';

import Menu from '@/components/menu';

export default function Home() {
    const [section, setSection] = React.useState("menu");
    
  return (
    <>
    <div className="bg-slate-100/50 overflow-hidden">
        <div className="w-full relative flex bg-center sm:h-auto bg-cover bg-no-repeat font-serif text-lg pt-32 sm:pt-16 md:pt-24" style={{ backgroundImage: `url(/pic2.jpg)` }}>
            <div className="ml-auto w-full sm:w-1/3 bg-black/25 backdrop-blur-sm border-slate-500">
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
                    <button className="w-full bg-[#074041] text-slate-100 mx-auto py-4 border-2 rounded border-slate-100/25">Order Now</button>
                </div>
            </div>
        </div>

        <div className="w-full text-white flex backdrop-blur h-1/6 p-0 bg-white py-2 space-x-2">
            <img className="w-1/3 object-cover" src="/pic4.jpg" alt="Image 1" />
            <img className="w-1/3 object-cover" src="/labola.jpg" alt="Image 2" />
            <img className="w-1/3 object-cover" src="/pic3.jpg" alt="Image 3" />
        </div>
        <div className="w-full">
            <div className="bg-black/90 text-center text-white p-0 font-serif text-1xl mx-auto uppercase flex-wrap sm:flex cursor-pointer">
                <h1 onClick={() => setSection("specials")} className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Specials</h1>
                <h1 onClick={() => setSection("menu")} className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 bg-white/75 text-black"> Food </h1>
                <h1 onClick={() => setSection("cocktails")} className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Cocktails</h1>
                <h1 onClick={() => setSection("wine")} className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Wine </h1>
                <h1 onClick={() => setSection("beer")} className="sm:w-1/5 sm:border-r-2 border-slate-500 p-4 hover:bg-white/50"> Beer </h1>
            </div>
            <Menu tab={section}/>
        </div>
        <div className="bg-[#074041] md:flex" id="about">
            <div className="lg:w-1/4">
                <img src="gusbus.png" className="bg-gradient-to-t from-black to-white/25 object-cover w-full h-full"></img>
            </div>
            <div className="lg:w-3/4 p-6">
                <h1 className="font-bold text-2xl text-white font-serif"> Discover La Bola</h1>
                <p className="text-white mt-4">
                    Your Mediterranean Culinary Haven in Downtown Rochester. We fuse vibrant Spanish and Mediterranean flavors with the freshest ingredients, offering a diverse menu from tapas to paellas. Indulge in seasonal specials, capturing the essence of each season. Join us for a flavorful adventure, immersing yourself in the warmth of our hospitality and unique ambiance. Can't wait to share our love for food with you!
                </p>
                <div className="md:flex text-white font-serif">
                    <div className="md:w-1/2 border-r-2 md:border-white border-none mt-10">
                        <h1 className="text-lg font-bold mb-2"> Contact Us</h1>
                        <p><b>Email:</b> labolarochester@gmail.com</p>
                        <p><b>Phone:</b> (585)-434-0044</p>
                    </div> 
                    <div className="md:w-1/2 md:ml-6">
                        <h1 className="text-lg font-bold mb-2 mt-10"> Visit Us</h1>
                        <div className="flex">
                            <div>
                                <b> Hours </b>
                                <p>Mon-Fri <br/>11:30am - 8:00pm</p>
                                <p>Sat-Sun</p>
                                <p>Private Events Only</p>
                                <br/>
                            </div>
                            <div className="ml-6">
                                <b>Address</b>
                                <p>240 East Main St.</p>
                                <p>Rochester, NY 14604</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        <div className="md:flex text-black bg-white" id="events">
            <div className="md:w-1/2 p-6">
            <h1 className="font-bold text-2xl font-serif"> Tailored Events at La Bola: <br/> Your Vision, Our Venue</h1>
                <p className="mt-4">
                Welcome to La Bola, where we invite you to host a variety of events in our delightful Mediterranean-inspired venue. Whether it's a private party, corporate event, social gathering, or a special occasion like a wedding, our versatile space and dedicated events team are here to tailor the experience to your needs. Imagine celebrating amidst the perfect blend of Spanish and Mediterranean ambiance, with carefully curated menus and personalized touches to make your event truly exceptional. Contact us today to discuss how we can turn your event into a memorable Mediterranean affair at La Bola.
                </p>
                <button className="bg-[#074041] font-semibold text-slate-100 mx-auto py-4 border-2 border-slate-100/25 inline-block px-2 mt-4 rounded">Book Now</button>
            </div>
            <div className="md:w-1/2">
                <img src="event.jpg" className="object-cover w-full h-full"></img>
            </div>
        </div>
    </div>
    </>
  )
}
