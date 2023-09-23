import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Menu from '@/components/menu';

const images = [
    'event.jpg',
    'event2.jpg',
    'event3.jpg',
    "catering2.jpg"
  ];
  
  const CateringCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         // Enable autoplay
        autoplaySpeed: 5000,
    };
  
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="-mb-2">
            <img src={image} alt={`Catering Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </Slider>
    );
  };

export default function Home() {
    const [section, setSection] = React.useState("specials");
    
  return (
    <>
    <div className="bg-slate-100/50 overflow-hidden">
        <div className="w-full relative flex bg-center sm:h-auto bg-cover bg-no-repeat font-serif text-lg pt-32 sm:pt-16 md:pt-24" style={{ backgroundImage: `url(/pic2.jpg)` }}>
            <div className="ml-auto w-full h-full md:full bg-gradient-to-t from-black/100 border-slate-500">
                <div className="bg-gradient-to-r mt-24 md:w-1/2 from-slate-900/100 font-semibold p-4 background-blur mb-4 text-left text-white">
                    Light fare restaurant and bar with Spanish & Mediterranean influences in the heart of downtown Rochester.
                </div>
                <div className="bg-gradient-to-l md:w-1/2  ml-auto from-slate-900/100 font-semibold p-4 background-blur mb-4 text-right text-white">
                    Seasonal menu with daily specials, rotating sangrias, and specialty cocktails.
                </div>
                <div className="bg-gradient-to-r md:w-1/2 from-slate-900/100 font-semibold p-4 background-blur mb-4 text-left text-white">
                    Located in the heart of downtown Rochester at the <span className="font-bold underline">Mercantile on Main</span>
                </div>
                <div className="bg-gradient-to-l md:w-1/2 ml-auto from-slate-900/100 font-semibold p-4 background-blur font-bold text-right text-white">
                    Join Us for Lunch, Dinner & Cocktails!
                </div>
                <div className="text-center background-blur font-black text-white w-full mx-auto mt-4 mb-8">
                    <Link href="https://order.toasttab.com/online/la-bola-240-e-main-st" className="bg-[#074041] font-semibold text-white py-2 px-6 rounded-lg hover:bg-opacity-80 border-white/50 border-2 focus:bg-opacity-80">
                    Order Now
                    </Link>
                </div>
            </div>
        </div>

        <div className="w-full text-white flex backdrop-blur h-1/6 p-0 border-slate-500 border-y-4">
            <img className="w-1/3 object-cover" src="/pic4.jpg" alt="Image 1" />
            <img className="w-1/3 object-cover" src="/labola.jpg" alt="Image 2" />
            <img className="w-1/3 object-cover" src="/pic3.jpg" alt="Image 3" />
        </div>
        <div className="w-full" id="menu">
            <div className="bg-black/90 text-center text-white p-0 font-serif text-1xl mx-auto uppercase flex-wrap sm:flex cursor-pointer shadow-lg shadow-black/50">
                <h1 onClick={() => setSection("specials")} className="sm:w-1/5 p-4 hover:bg-white/50"> Specials</h1>
                <h1 onClick={() => setSection("menu")} className="sm:w-1/5 p-4 hover:bg-white/50"> Food </h1>
                <h1 onClick={() => setSection("cocktails")} className="sm:w-1/5 p-4 hover:bg-white/50"> Cocktails</h1>
                <h1 onClick={() => setSection("wine")} className="sm:w-1/5 p-4 hover:bg-white/50"> Wine </h1>
                <h1 onClick={() => setSection("beer")} className="sm:w-1/5 p-4 hover:bg-white/50"> Beer </h1>
            </div>
            <div className="text-slate-900 backdrop-blur bg-white/50 text-slate-800 lg:flex p-4 pt-16 lg:space-x-4">
                <Menu tab={section}/>
            </div>
        </div>
        <div className="bg-[#074041] md:flex" id="about">
            <div className="md:w-1/2">
                <img src="gusbus.png" className="object-cover w-full h-full"></img>
            </div>
            <div className="md:w-2/4 w-full flex">
                    <div className="text-white font-serif">
                    <h1 className="font-bold text-2xl text-white font-serif m-6"> Discover La Bola</h1>
                    <p className="text-white mx-6 mb-6">
                        <i>Your Mediterranean Culinary Haven in Downtown Rochester. </i> We fuse vibrant Spanish and Mediterranean flavors with the freshest ingredients, offering a diverse menu from tapas to paellas. Indulge in seasonal specials, capturing the essence of each season. Join us for a flavorful adventure, immersing yourself in the warmth of our hospitality and unique ambiance. Can&apos;t wait to share our love for food with you!
                    </p>
                    <div className="ml-6">
                        <div className="border-none mt-10">
                            <h1 className="text-lg font-bold mb-2" id="contact"> Contact Us</h1>
                            <p><b>Email:</b> contact@labolarochester.com</p>
                            <p><b>Phone:</b> (585)-434-0044</p>
                        </div> 
                        <div className="">
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
                                    <b>Location</b>
                                    <p>240 East Main St.</p>
                                    <p>Rochester, NY 14604</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div className="md:flex text-black bg-white" id="events">
            <div className="md:w-1/2 md:hidden">
                <CateringCarousel />
            </div>
            <div className="md:w-1/2 p-6 flex-1">
                <h1 className="font-bold text-2xl font-serif"> Tailored Events at La Bola <br/> <i className="font-thin">Our Venue, Your Vision</i></h1>
                <p className="mt-4">
                Welcome to La Bola, where we invite you to host a variety of events in our delightful Mediterranean-inspired venue. Whether it&apos;s a private party, corporate event, social gathering, or a special occasion like a wedding, our versatile space and dedicated events team are here to tailor the experience to your needs. Imagine celebrating amidst the perfect blend of Spanish and Mediterranean ambiance, with carefully curated menus and personalized touches to make your event truly exceptional. Contact us today to discuss how we can turn your event into a memorable Mediterranean affair at La Bola.
                </p>
                <div className="w-full p-4 text-right">
                    <Link href="/bookAnEvent" className="bg-[#074041] font-semibold text-slate-100 mx-auto py-2 shadow-lg shadow-black/25 inline-block px-4 rounded">
                        Book Now
                    </Link>
                </div>
            </div>
            <div className="md:w-1/2 flex-1 hidden md:block">
                <CateringCarousel />
            </div>
        </div>
        <div className="md:flex flex-1 text-white bg-black" id="events">
            <div className="md:w-1/2">
                <Slider autoplay="true" autoplaySpeed={4500}>
                    <img src={"/catering.jpg"} className="object-cover w-full h-full" />
                    <img src={"/catering3.jpg"} className="object-cover w-full h-full" />
                </Slider>
            </div>
            <div className="md:w-1/2 p-6 order-first md:order-last">
                <h1 className="font-bold text-2xl font-serif"> Catered By La Bola <br/> <i className="font-thin">Our Menu, Your Venue</i></h1>
                <p className="mt-4">
                Elevate your event with the exquisite flavors of La Bola. Our catering service brings the taste of the Mediterranean directly to your venue. Whether it&apos;s a corporate gathering, a wedding reception, or a private celebration, our versatile menu and professional team will make your event memorable. From tapas to paellas, our curated selection offers a variety of options to suit your preferences and delight your guests. Let La Bola cater your event and ensure an extraordinary culinary experience that reflects the essence of Spanish and Mediterranean cuisine.
                </p>
                <div className="w-full p-4 text-right">
                    <Link href="/bookAnEvent" className="bg-[#074041] shadow-lg shadow-black/25 font-semibold text-slate-100 mx-auto py-2 inline-block px-4 rounded">
                        Catering Inquiry
                    </Link>
                </div>
            </div>
        </div>
        <div className="bg-red-500 w-full px-8 py-4 text-center text-white bg-slate-900 bg-blur justify-between md:flex">
            <small className="block text-sm font-bold">Copyright &copy; 2023 La Bola</small>
            <small className="text-xs">Made With &#x2764; By <a href="https://dylandunn.me" className="underline">Dylan Dunn</a></small>
        </div>
    </div>
    </>
  )
}
