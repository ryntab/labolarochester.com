import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Head from 'next/head';

import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
            <Image width={1024} height={1024} src={image} alt={`Various Images showing a number of spaces available for hosting events: Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </Slider>
    );
  };

export default function Home() {
    const [section, setSection2] = React.useState("menu");

    const setSection = (section) => {
        setSection2(section);
        scrollToMenu();
    }

    const scrollToMenu = () => {
        window.scrollTo({
            top: document.getElementById("menu").getBoundingClientRect().top + window.scrollY - (document.getElementById("navbar").offsetHeight * 2),
            behavior: 'smooth' 
          });
    } 

  return (
    <>
    <Head>
        <title>La Bola | Rochester, NY&apos;s Favorite Lunch and Dinner Spot | Cocktails, Wine Bar, Tapas</title>
        <meta name="description" content="Experience the vibrant flavors of Spain and the Mediterranean at La Bola, a light fare restaurant and bar with Spanish & Mediterranean influences in the heart of downtown Rochester." />
    </Head>
    <div id="home"  className="max-w-7xl mx-auto overflow-hidden">
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
                    <Link href="/menu" className="hover:cursor-pointer hover:bg-white/75 bg-white/90 my-8 text-black font-semibold border-2 border-black/50 inline-block py-2 px-8 hover:bg-opacity-80 focus:bg-opacity-80">
                        <h6>
                            View Menu
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
            <div className="w-full text-white p-4 bg-white md:flex md:justify-end justify-center md:justify-start">
                <h3 className='text-xl text-black md:mr-4 pt-2 text-center pb-4 md:pb-0'> Available for delivery and pickup!</h3>
                <a href="https://order.toasttab.com/online/la-bola-240-e-main-st" className="font-semibold md:font-normal bg-slate-900 font-serif text-xl px-4 p-2 mx-auto md:mx-0 inline-block text-center w-full md:w-auto"> Order Online</a>
            </div>
        </div>
        <div className="lg:flex max-w-7xl mx-auto" id="about">
            <div className="lg:w-1/2 bg-black m-6">
                <Image
                width={1024}
                height={1024}
                src="/gusbus.png"
                className="object-cover w-full h-full"
                alt="Head Chef Gus"
                />
            </div>
            <div className="w-full lg:w-1/2 flex">
                <div className="font-serif p-6">
                    <h1 className="font-bold text-2xl font-serif mb-2">
                        Discover La Bola
                    </h1>
                    <p className=" pb-4">
                        <i>Your Mediterranean Culinary Haven in Downtown Rochester. </i> We fuse
                        vibrant Spanish and Mediterranean flavors with the freshest ingredients,
                        offering a diverse menu from tapas to paellas. Indulge in seasonal specials,
                        capturing the essence of each season. Join us for a flavorful adventure,
                        immersing yourself in the warmth of our hospitality and unique ambiance.
                        We can't wait to share our love for food with you!
                    </p>
                    <div className="lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="justify-between">
                            <div className="w-auto">
                                <p><b className="text-lg mb-4">Hours</b></p>
                                <p>Mon-Fri<br/><i className="text-sm ml-4">- 11:30am - 8:00pm</i></p>
                                <p>Sat-Sun<br/><i className="text-sm ml-4">- Private Events Only</i></p>
                            </div>
                            <div className="mt-6">
                                <p><b className="text-lg mb-4">Location</b></p>
                                <p><i>Mercantile On Main</i></p>
                                <p>240 East Main St.</p>
                                <p>Rochester, NY 14604</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:flex text-black">
            <div className="md:w-1/2 w-full">
                <Slider autoplay="true" autoplaySpeed={4500} adaptiveHeight={true}>
                    <Image width={1024} height={1024} src={"/event.jpg"} className="object-cover w-full h-full" alt="A display of roasted beets, goat cheese, and charred carrots and lebneh"/>
                    <Image width={1024} height={1024} src={"/event3.jpg"} className="object-cover w-full h-full" alt="A display of charcuterie, meats and cheeses" />
                </Slider>
                <div className="flex items-center justify-center">
                <div className="text-left p-6">
                    <h2 className="font-bold text-2xl font-serif">Tailored Events at La Bola</h2>
                    <i className="text-xl block font-serif">Our Venue, Your Vision</i>
                    <p className="mt-4">
                        Welcome to La Bola, where we invite you to host a variety of events in our delightful Mediterranean-inspired venue. Whether it&apos;s a private party, corporate event, social gathering, or a special occasion like a wedding, our versatile space and dedicated events team are here to tailor the experience to your needs. Imagine celebrating amidst the perfect blend of Spanish and Mediterranean ambiance, with carefully curated menus and personalized touches to make your event truly exceptional. Contact us today to discuss how we can turn your event into a memorable Mediterranean affair at La Bola.
                    </p>
                    <div className="mt-8 text-right">
                    <Link href="/events" className="bg-black text-white font-semibold py-2 px-4">
                        Learn More
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="md:w-1/2 bg-black w-full text-white">
                <Slider autoplay="true" autoplaySpeed={4500} adaptiveHeight={true}>
                    <Image width={1024} height={1024} src={"/catering.jpg"} className="object-cover w-full h-full" alt="A display of roasted beets, goat cheese, and charred carrots and lebneh"/>
                    <Image width={1024} height={1024} src={"/catering3.jpg"} className="object-cover w-full h-full" alt="A display of charcuterie, meats and cheeses" />
                </Slider>
                <div className="bg-black/90 h-auto flex items-center justify-center">
                <div className="text-left p-6">
                    <h2 className="font-bold text-2xl font-serif">Catered By La Bola</h2>
                    <i className="font-serif text-xl block">Our Menu, Your Venue</i>
                    <p className="mt-4">
                        Elevate your event with the exquisite flavors of La Bola. Our catering service brings the taste of the Mediterranean directly to your venue. Whether it's a corporate gathering, a wedding reception, or a private celebration, our versatile menu and professional team will make your event memorable. From tapas to paellas, our curated selection offers a variety of options to suit your preferences and delight your guests. Let La Bola cater your event and ensure an extraordinary culinary experience that reflects the essence of Spanish and Mediterranean cuisine.
                    </p>
                    <div className="mt-8 text-right">
                    <Link href="/bookAnEvent" className="bg-white text-black font-semibold py-2 px-4">
                        Start An Inquiry
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="bg-slate-900/90 p-6 justify-left mx-auto">
            <div className="max-w-md mx-auto text-center">
                <a className="block text-center" href="https://avvinorochester.com">
                    <Image width={1024} height={1024} alt="Logo For Avvino, Text surrounded by curly frills" src="/avvino.png" className="mb-4 px-4 py-2 rounded object-fit" />
                </a>
                <h2 className='font-bold text-lg text-white font-serif ml-6 mb-2 mt-0'> From Avvino To La Bola</h2>
                <p className="text-white mx-6 mb-6 text-sm font-serif mt-2">
                    La Bola is a proud offspring of Avvino, our original and highly acclaimed restaurant. Avvino, renowned for its exceptional dining experience and rich culinary heritage, has been a cornerstone of our community for many years. As we continue to evolve and innovate, we decided to introduce La Bola, a new venture that carries forward Avvino&apos;s legacy while embracing the vibrant flavors of Spain and the Mediterranean. La Bola promises to enchant your taste buds with an array of delightful dishes, inspired by the same passion and expertise that originated at Avvino.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
