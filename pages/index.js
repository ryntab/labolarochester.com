import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Head from 'next/head';

import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const structuredData = {
    "@context": "http://schema.org",
    "@type": "Restaurant",
    "name": "La Bola",
    "description": "Experience the vibrant flavors of Spain and the Mediterranean at La Bola, a light fare restaurant and bar in downtown Rochester.",
    "url": "https://labolarochester.com",
    "image": "https://labolarochester.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "240 East Main St.",
      "addressLocality": "Rochester",
      "addressRegion": "NY",
      "postalCode": "14604"
    },
    "telephone": "(585) 434-0044"
};


import Menu from '@/components/menu';

const images = [
    '/event.jpg',
    '/event2.jpg',
    '/event3.jpg',
    "/catering2.jpg",
    '/topdown.jpg',
    '/bar.jpg'
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight:false,
    responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 2,  
          }
        },
    ]
  };
  
  const CateringCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         
        autoplaySpeed: 5000,
    };
  
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="-mb-2">
            <Image width={1080} height={720} src={image} alt={`Various Images showing a number of spaces available for hosting events: Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </Slider>
    );
  };

export default function Home() {
    const [section, setSection2] = React.useState("menu");

    const setSection = (section) => {
        setSection2(section);
        window.scrollTo({
          top: document.getElementById("menu").getBoundingClientRect().top + window.scrollY - (document.getElementById("navbar").offsetHeight * 2),
          behavior: 'smooth' 
        });
    }
    
  return (
    <>
    <Head>
        <title>La Bola by Avvino</title>
        <meta name="description" content="Experience the vibrant flavors of Spain and the Mediterranean at La Bola, a light fare restaurant and bar with Spanish & Mediterranean influences in the heart of downtown Rochester." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Head>
    <div id="home"  className="bg-slate-100/50 overflow-hidden">
        <div className="w-full relative flex bg-center sm:h-auto bg-cover bg-no-repeat font-serif text-lg pt-8 md:pt-24" style={{ backgroundImage: `url(/pic2.jpg)` }}>
            <div className="ml-auto w-full h-full md:full bg-gradient-to-t from-black/90 border-slate-500">
                <div className="bg-gradient-to-r mt-24 md:w-1/2 from-black font-semibold p-4 background-blur mb-4 text-left text-white">
                    <h6> 
                        Light fare restaurant and bar with Spanish & Mediterranean influences in the heart of downtown Rochester.
                    </h6>
                </div>
                <div className="bg-gradient-to-l md:w-1/2  ml-auto from-black font-semibold p-4 background-blur mb-4 text-right text-white">
                    <h6> 
                        Seasonal menu with daily specials, rotating sangrias, and specialty cocktails.
                    </h6>
                </div>
                <div className="bg-gradient-to-r md:w-1/2 from-black font-semibold p-4 background-blur mb-4 text-left text-white">
                    <h6>
                        Located at the <span className="font-bold">Mercantile on Main</span>
                    </h6>
                </div>
                <div className="bg-gradient-to-l md:w-1/2 ml-auto from-black font-semibold p-4 background-blur font-bold text-right text-white">
                    <h6>
                        Join Us for Lunch, Dinner & Cocktails!
                    </h6>
                </div>
                <div className="text-center background-blur font-black text-white w-full mx-auto mt-4 mb-8">
                    <Link href="https://order.toasttab.com/online/la-bola-240-e-main-st" className="hover:bg-white/75 bg-white/90 my-8 text-black font-semibold border-2 border-black/50 inline-block py-2 px-8 hover:bg-opacity-80 focus:bg-opacity-80">
                        <h6>
                            Order Online
                        </h6>
                    </Link>
                </div>
            </div>
        </div>
        <div className="w-full text-white backdrop-blur p-0 border-slate-500 border-y-2 overflow-hidden">
            <Slider {...settings}>
                <Image width="512" height="512" className="h-full  object-cover" src="/pic4.jpg" alt="Short Rib with Patatas Bravas"/>
                <Image width="512" height="512" className="h-full  object-cover" src="/ryan.jpg" alt="Full Service Bar" />
                <Image width="512" height="512" className="h-full  object-cover" src="/pic3.jpg" alt="Cocktail" />
                <Image width="512" height="512" className="h-full  object-cover" src="/bread.jpg" alt="Pan De Tomate" />
                <Image width="512" height="512" className="h-full  object-cover" src="/burger.jpg" alt="Bola Burger" />
                <Image width="512" height="512" className="h-full  object-cover" src="/jordan.jpg" alt="Bartender Holding Cocktail" />
                <Image width="512" height="512" className="h-full  object-cover" src="/food2.jpg" alt="Ceasar Salad With Chicken" />
            </Slider>
        </div>
        <div className="w-full" id="menu">
            <div className="bg-black text-center text-white p-0 font-serif text-xl mx-auto uppercase flex-wrap sm:flex cursor-pointer">
                <h1 onClick={() => setSection("specials")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Specials</h1>
                <h1 onClick={() => setSection("menu")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Food </h1>
                <h1 onClick={() => setSection("cocktails")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Cocktails</h1>
                <h1 onClick={() => setSection("wine")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Wine </h1>
                <h1 onClick={() => setSection("beer")} className="sm:w-1/5 p-4 hover:bg-white/50 my-auto"> Other Beverages </h1>
            </div>
            <div className="text-slate-900 backdrop-blur bg-stone-100/50 bg-cover text-slate-800 lg:flex p-4 pt-16 lg:justify-center">
                <Menu tab={section}/>
            </div>
        </div>
        <div className="bg-[#07403F] md:flex" id="about">
            <div className="md:w-1/2 bg-black">
                <Image width={1024} height={1024} src="/gusbus.png" className="object-cover w-full h-full" alt="Head Chef Gus"/>
            </div>
            <div className="md:w-2/4 w-full flex">
                <div className="text-white font-serif">
                    <h1 className="font-bold text-2xl text-white font-serif m-6"> Discover La Bola</h1>
                    <p className="text-white mx-6 mb-6">
                        <i>Your Mediterranean Culinary Haven in Downtown Rochester. </i> We fuse vibrant Spanish and Mediterranean flavors with the freshest ingredients, offering a diverse menu from tapas to paellas. Indulge in seasonal specials, capturing the essence of each season. Join us for a flavorful adventure, immersing yourself in the warmth of our hospitality and unique ambiance. We can&apos;t wait to share our love for food with you!
                    </p>
                    <div className="ml-6">
                        <div className="border-none mt-10">
                            <h1 className="text-lg font-bold mb-2" id="contact"> Contact Us</h1>
                            <p>
                            <b>Email:</b>{" "}
                            <a href="mailto:contact@labolarochester.com" className="text-blue-200 my-4 inline-block">
                                contact@labolarochester.com
                            </a>
                            </p>
                            <p>
                            <b>Phone:</b>{" "}
                            <a href="tel:5854340044" className="text-blue-200">
                                (585) 434-0044
                            </a>
                            </p>
                        </div> 
                        <div className="">
                            <h1 className="text-lg font-bold mb-2 mt-10"> Visit Us</h1>
                            <div className="flex">
                                <div>
                                    <b> Hours </b>
                                    <p>Mon-Fri <br/><i>11:30am - 8:00pm</i></p>
                                    <p>Sat-Sun</p>
                                    <p className="italic">Private Events Only</p>
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
                <h1 className="font-bold text-2xl font-serif"> Tailored Events at La Bola <br/> <i className="font-thin text-xl">Our Venue, Your Vision</i></h1>
                <p className="mt-4">
                Welcome to La Bola, where we invite you to host a variety of events in our delightful Mediterranean-inspired venue. Whether it&apos;s a private party, corporate event, social gathering, or a special occasion like a wedding, our versatile space and dedicated events team are here to tailor the experience to your needs. Imagine celebrating amidst the perfect blend of Spanish and Mediterranean ambiance, with carefully curated menus and personalized touches to make your event truly exceptional. Contact us today to discuss how we can turn your event into a memorable Mediterranean affair at La Bola.
                </p>
                <div className="w-full text-right">
                    <Link href="/bookAnEvent" className="bg-black font-semibold text-slate-100 mx-auto py-2 inline-block px-4">
                        Book Now
                    </Link>
                </div>
            </div>
            <div className="md:w-1/2 flex-1 hidden md:block">
                <CateringCarousel />
            </div>
        </div>
        <div className="md:flex text-white bg-black" id="events">
            <div className="md:w-1/2">
                <Slider autoplay="true" autoplaySpeed={4500} adaptiveHeight={true}>
                    <Image width={1080} height={720} src={"/catering.jpg"} className="object-cover w-full h-full" alt="A display of roasted beets, goat cheese, and charred carrots and lebneh"/>
                    <Image width={1080} height={720} src={"/catering3.jpg"} className="object-cover w-full h-full" alt="A display of charcuterie, meats and cheeses" />
                </Slider>
            </div>
            <div className="md:w-1/2 p-6 order-first md:order-last">
                <h1 className="font-bold text-2xl font-serif">Catered By La Bola</h1>
                <i className="font-thin text-xl block">Our Menu, Your Venue</i>
                <p className="mt-4">
                Elevate your event with the exquisite flavors of La Bola. Our catering service brings the taste of the Mediterranean directly to your venue. Whether it&apos;s a corporate gathering, a wedding reception, or a private celebration, our versatile menu and professional team will make your event memorable. From tapas to paellas, our curated selection offers a variety of options to suit your preferences and delight your guests. Let La Bola cater your event and ensure an extraordinary culinary experience that reflects the essence of Spanish and Mediterranean cuisine.
                </p>
                <div className="mt-8 text-right">
                <Link href="/bookAnEvent" className="bg-white text-black font-semibold py-2 px-4">
                    Catering Inquiry
                </Link>
                </div>
            </div>
        </div>
        <div className="bg-slate-900/90 p-6 md:flex justify-left">
            <a className="block text-center" href="https://avvinorochester.com">
                <Image width={1024} height={1024} alt="Logo For Avvino, Text surrounded by curly frills" src="/avvino.png" className="mb-4 px-4 py-2 rounded object-fit" />
            </a>
            <div className="">
                <h1 className='font-bold text-lg text-white font-serif ml-6 mb-2 mt-0'> From Avvino To La Bola</h1>
                <p className="text-white mx-6 mb-6 text-sm font-serif mt-2">
                    La Bola is a proud offspring of Avvino, our original and highly acclaimed restaurant. Avvino, renowned for its exceptional dining experience and rich culinary heritage, has been a cornerstone of our community for many years. As we continue to evolve and innovate, we decided to introduce La Bola, a new venture that carries forward Avvino&apos;s legacy while embracing the vibrant flavors of Spain and the Mediterranean. La Bola promises to enchant your taste buds with an array of delightful dishes, inspired by the same passion and expertise that originated at Avvino.
                </p>
            </div>
        </div>
        <div className="bg-red-500 w-full px-8 py-4 text-center text-white bg-stone-900 bg-blur justify-between md:flex">
            <small className="block text-sm font-bold py-2">
                <Link href="https://www.termsfeed.com/live/5f63db38-e531-4f95-b806-49d7b2c97e55">
                    Privacy Policy
                </Link>
                &nbsp;&bull;&nbsp;
                <Link href="https://www.termsfeed.com/live/b4e62ae9-610d-4897-bfdf-c437d6cbebee">
                    Terms of Service
                </Link>
            </small>
            <small className="text-xs">
                Copyright &copy; 2023 La Bola
                <br />
                Made With &#x2764; By <a href="https://dylandunn.me" className="underline">Dylan Dunn</a>
            </small>
            </div>
    </div>
    </>
  )
}
