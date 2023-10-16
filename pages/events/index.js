import Link from "next/link";

import Head from "next/head";

export default function Event() {
    return(
        <>
        <Head>
            <title>Events - La Bola By Avvino</title>
            <meta name="description" content="Discover the perfect venue for your upcoming event, whether it's an office happy hour, an intimate private dinner, a joyous baby shower, or a memorable wedding." />
        </Head>
        <div className="bg-white/75 backdrop-blur">
            <div className="max-w-7xl mx-auto">
                <div className="relative h-[75vh]">
                    <img src="/hero2.jpg" className="h-full w-full object-cover" alt="Background Image" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full text-center">
                        <h1 className="text-display text-2xl md:text-4xl p-6 bg-black/75 backdrop-blur text-white/90 block">
                            Host Your Event With La Bola
                        </h1>
                    </div>
                </div>
                <div className="md:flex p-6">
                    <div className="md:w-1/2 relative">
                        <img src="mercantile.jpg" className="object-cover md:w-full"></img>
                    </div>
                    <div className="w-full p-6 w-full inset-0">
                        <h3 className="font-semibold text-xl pb-2">
                            Your Vision, Your Event – Our Versatile Spaces and Menu
                        </h3>
                        <p className="leading-6 font-serif">
                            Discover the perfect venue for your upcoming event, whether it&apos;s an office happy hour, an intimate private dinner, a joyous baby shower, a memorable wedding, or any other private or public occasion. At our establishment, we offer a versatile range of event spaces to suit your needs.

                            With over 6,000 square feet of customizable space and various venue sizes available, we can cater to gatherings of all sizes. Whether you&apos;re planning an intimate dinner for six or a conference for up to 600 attendees, we have the ideal space for you.

                            Our dedicated team and trusted partners are here to make your event exceptional. We can assist you in creating a tailored ambiance with personalized decorations, collaborate with you to craft a unique menu, or provide the assistance of an experienced event coordinator if needed. Your special day is important to us, and we&apos;re committed to ensuring a seamless and memorable experience.
                        </p>
                        <div className="w-full text-right">
                            <Link href="/bookAnEvent" className="bg-black font-semibold text-slate-100 mx-auto py-2 inline-block px-4 mt-4">
                                Submit An Inquiry
                            </Link>
                        </div>
                        <p className="py-2 italic text-sm border-t-2 border-teal-900/50 mt-6 text-black/50 font-serif"> Disclaimer: All spaces are provided by WinnCo and are available to be booked without catering by La Bola. Contact WinnCo at sbrooks@winnco.com to find out more.</p>
                    </div>
                </div>
                <div className="flex flex-wrap hover:cursor-pointer">
                    <Link href="/events/#gallery" className="w-1/2 md:w-1/4 relative overflow-hidden">
                        <img src="glassGallery.jpg" className="object-cover h-full w-full hover:scale-110 transition-all" alt="Glass Gallery" />
                        <div className="absolute bottom-0 w-full flex items-center justify-center scale-105">
                        <h2 className="font-semibold font-sans p-2 bg-black/75 text-white w-full text-center backdrop-blur text-sm">Behind The Glass Gallery</h2>
                        </div>
                    </Link>
                    <Link href="/events/#riser" className="w-1/2 md:w-1/4 relative overflow-hidden">
                        <img src="riser.jpg" className="object-cover h-full w-full hover:scale-110 transition-all" alt="Main Street Riser" />
                        <div className="absolute bottom-0 w-full flex items-center justify-center">
                        <h2 className="text-lg font-semibold font-sans p-2 bg-black/75 text-white w-full text-center backdrop-blur text-sm">Main Street Riser</h2>
                        </div>
                    </Link>
                    <Link href="/events/#atrium" className="w-1/2 md:w-1/4 relative overflow-hidden">
                        <img src="atrium2.jpg" className="object-cover h-full w-full hover:scale-110 transition-all" alt="North Atrium" />
                        <div className="absolute bottom-0 w-full flex items-center justify-center">
                        <h2 className="text-lg font-semibold font-sans p-2 bg-black/75 text-white w-full text-center backdrop-blur text-sm">North Atrium</h2>
                        </div>
                    </Link>
                    <Link href="/events/#mercantile" className="w-1/2 md:w-1/4 relative overflow-hidden">
                        <img src="wedding2.jpg" className="object-cover h-full w-full hover:scale-110 transition-all" alt="The Full Mercantile On Main" />
                        <div className="absolute bottom-0 w-full flex items-center justify-center">
                        <h2 className="text-lg font-semibold font-sans p-2 bg-black/75 text-white w-full text-center backdrop-blur text-sm">The Full Mercantile</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="p-6" id="gallery">
                <div className="flex w-full space-x-2">
                    <div className="w-2/3">
                        <img src="/gallery.jpg" className="object-cover w-full h-full"></img>
                    </div>
                    <div className="w-1/3">
                        <img src="/gallery3.jpg" className="object-cover w-full h-1/3"></img>
                        <img src="/gallery4.jpg" className="object-cover w-full pt-2 h-2/3"></img>
                    </div>
                </div>
                <h2 className="text-4xl py-6 text-teal-900 font-thin">
                    BEHIND THE GLASS GALLERY
                </h2>
                <div className="border-t-2 border-teal-900/25 md:flex">
                    <div className="md:w-2/3 border-r-2 p-6 pl-0 border-teal-900/25">
                        <p className="font-serif text-lg text-black/75">
                            Picture your next leadership retreat here, where a few hours of focused problem
                            solving and innovating can culminate in an inspired array of food and cocktails.
                            Or skip the biz part and just book for a happy hour, bridal shower, or rehearsal dinner.
                        </p>
                        <p className="font-semibold mt-2"> Interested in finding out more? <Link href="/bookAnEvent" className="text-blue-500 font-semibold underline">Submit An Inquiry</Link></p>
                    </div>
                    <div className="md:w-1/3 p-6 font-serif">
                        <h2 className="font-semibold font-serif"> Capacity:</h2>
                        <p> 60 Guests Seated, 80 Guests Cocktail Style </p>
                        <h2 className="font-semibold font-serif mt-2"> Rental Fee:*</h2>
                        <p> (Mon-Fri): $350 for 4 Hours </p>
                        <p> (Sat-Sun): $550 for 4 Hours </p>
                        <i> $75/hour for additional time </i>
                        <p className="mt-4 text-sm">* Chairs, tables, and buffet stands can be rented for an additional fee.</p>
                    </div>
                </div>
            </div>
            <div className="p-6" id="riser">
                <div className="flex w-full space-x-2">
                    <div className="w-2/3">
                        <img src="/riser1.jpg" className="object-cover w-full h-full"></img>
                    </div>
                    <div className="w-1/3">
                        <img src="/riser2.jpg" className="object-cover w-full h-1/2"></img>
                        <img src="/riser3.jpg" className="object-cover w-full pt-2 h-1/2"></img>
                    </div>
                </div>
                <h2 className="text-4xl py-6 text-teal-900 font-thin">
                    MAIN STREET RISER
                </h2>
                <div className="border-t-2 border-teal-900/25 md:flex">
                    <div className="md:w-2/3 border-r-2 p-6 pl-0 border-teal-900/25">
                        <p className="font-serif text-lg text-black/75">
                            An ideal space for hosting special celebrations, networking events, happy hours and
                            more. There’s just enough privacy for your guests to stay connected, and just enough
                            ambiance to inspire and enliven.
                        </p>
                        <p className="font-semibold mt-2"> Interested in finding out more? <Link href="/bookAnEvent" className="text-blue-500 font-semibold underline">Submit An Inquiry</Link></p>
                    </div>
                    <div className="md:w-1/3 p-6 font-serif">
                        <h2 className="font-semibold font-serif"> Capacity:</h2>
                        <p> 40 Guests Seated, 80 Guests Cocktail Style </p>
                        <h2 className="font-semibold font-serif mt-2"> Rental Fee:</h2>
                        <p> (Mon-Fri): $300 for 4 Hours </p>
                        <p> (Sat-Sun): $500 for 4 Hours </p>
                        <i> $75/hour for additional time </i>
                    </div>
                </div>
            </div>
            <div className="p-6" id="atrium">
                <div className="flex w-full space-x-2 max-h-[50vh]">
                    <div className="w-2/3">
                        <img src="/atrium3.jpg" className="object-cover w-full h-full"></img>
                    </div>
                    <div className="w-1/3">
                        <img src="/atrium2.jpg" className="object-cover w-full h-1/3"></img>
                        <img src="/fullMercantile.jpg" className="object-cover w-full pt-2 h-2/3"></img>
                    </div>
                </div>
                <h1 className="text-4xl py-6 text-teal-900 font-thin">
                    NORTH ATRIUM
                </h1>
                <div className="border-t-2 border-teal-900/25 md:flex">
                    <div className="md:w-2/3 border-r-2 p-6 pl-0 border-teal-900/25">
                        <p className="font-serif text-lg text-black/75">
                            Here, you and your attendees can feel the energy of the space yet still be away from
                            it all. Let the celebration begin. Or the awards ceremony, cocktail party, trade show,
                            vendor appreciation party.
                        </p>
                        <p className="font-semibold mt-2"> Interested in finding out more? <Link href="/bookAnEvent" className="text-blue-500 font-semibold underline">Submit An Inquiry</Link></p>
                    </div>
                    <div className="md:w-1/3 p-6 font-serif">
                        <h2 className="font-semibold font-serif"> Capacity:</h2>
                        <p> 100 Guests Seated, 200 Guests Cocktail Style </p>
                        <h2 className="font-semibold font-serif mt-2"> Rental Fee:*</h2>
                        <p> (Mon-Fri): $450 for 4 Hours </p>
                        <p> (Sat-Sun): $650 for 4 Hours </p>
                        <i> $75/hour for additional time </i>
                        <p className="mt-4 text-sm">* Chairs, tables, and buffet stands can be rented for an additional fee.</p>
                    </div>
                </div>
            </div>
            <div className="p-6" id="mercantile">
                <div className="flex w-full space-x-2 max-h-[50vh]">
                    <div className="w-2/3">
                        <img src="/fullMercantile.jpg" className="object-cover w-full h-full"></img>
                    </div>
                    <div className="w-1/3">
                        <img src="/mercantile2.jpg" className="object-cover w-full h-1/2"></img>
                        <img src="/mercantile3.jpg" className="object-cover w-full pt-2 h-1/2"></img>
                    </div>
                </div>
                <h1 className="text-4xl py-6 text-teal-900 font-thin">
                    THE FULL MERCANTILE ON MAIN
                </h1>
                <div className="border-t-2 border-teal-900/25 md:flex">
                    <div className="md:w-2/3 border-r-2 p-6 pl-0 border-teal-900/25">
                        <p className="font-serif text-lg text-black/75">
                        For larger celebrations and to make the most of your day, consider reserving the
                        entire floor of the Mercantile on Main. Your guests will love the vibrant, airy open
                        spaces, and remember the event long after you say, “I do.”
                        </p>
                    </div>
                    <div className="md:w-1/3 p-6 font-serif">
                        <h2 className="font-semibold font-serif"> Capacity:</h2>
                        <p> 225 Guests Seated, 600 Guests Cocktail Style </p>
                        <h2 className="font-semibold font-serif mt-2"> Rental Fee:</h2>

                        <p className="text-sm">For all inquiries, email <a href="mailto:sibleybuilding@winnco.com" class="text-blue-500">sibleybuilding@winnco.com </a>
                            with date/time of event, type of event, estimated
                            number of guests, and if you wish to have the event
                            catered. Rental fee starts at $1,500.
                        </p>
                    </div>
                </div>
            </div>
            <p className="p-6 font-semibold font-sans bg-white"> For more information and FAQs checkout The Mercantile&apos;s <a href="/EventCatalog.pdf" className="text-blue-500 underline">Event Catalog</a></p>
        </div>
        </>
    )
}
