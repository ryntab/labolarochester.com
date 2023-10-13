import Link from "next/link";

import { ArrowRightIcon } from "@heroicons/react/outline";

export default function Event() {
    return(
        <div className="bg-teal-900">
            <div className="mx-auto">
                <div className="relative">
                    <img src="/hero2.jpg" className="w-full h-[50vh] object-cover" alt="Background Image" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full text-center">
                        <h1 className="text-display text-2xl md:text-4xl p-6 bg-black/75 backdrop-blur text-white/90 block">
                            Host Your Event With La Bola
                        </h1>
                    </div>
                </div>
                <div className="md:flex md:p-6 max-w-7xl mr-auto">
                    <div className="md:w-1/2 relative">
                        <img src="mercantile.jpg" className="object-cover md:w-full md:h-full"></img>
                    </div>
                    <div className="w-full bg-white p-6 w-full inset-0">
                        <h3 className="font-semibold text-xl pb-2">
                            Your Vision, Your Event – Our Versatile Spaces
                        </h3>
                        <p className="leading-6 font-sans">
                            Discover the perfect venue for your upcoming event, whether it&apos;s an office happy hour, an intimate private dinner, a joyous baby shower, a memorable wedding, or any other private or public occasion. At our establishment, we offer a versatile range of event spaces to suit your needs.

                            With over 4,000 square feet of customizable space and various venue sizes available, we can cater to gatherings of all sizes. Whether you&apos;re planning an intimate dinner for six or a conference for up to 600 attendees, we have the ideal space for you.

                            Our dedicated team and trusted partners are here to make your event exceptional. We can assist you in creating a tailored ambiance with personalized decorations, collaborate with you to craft a unique menu, or provide the assistance of an experienced event coordinator if needed. Your special day is important to us, and we&apos;re committed to ensuring a seamless and memorable experience.
                        </p>
                        <div className="w-full text-right">
                            <Link href="/bookAnEvent" className="bg-black font-semibold text-slate-100 mx-auto py-2 inline-block px-4 mt-4">
                                Start An Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold w-full text-white p-6 text-left"> Click On A Venue To Learn More</h3>
                </div>
                <div className="flex flex-wrap hover:cursor-pointer">
                    <Link href="/events/gallery" className="w-1/2 md:w-1/4 relative overflow-hidden">
                        <img src="glassGallery.jpg" className="object-cover h-full w-full hover:scale-110 transition-all" alt="Glass Gallery" />
                        <div className="absolute bottom-0 w-full flex items-center justify-center scale-105">
                        <h2 className="font-semibold font-sans p-2 bg-black/75 text-white w-full text-center backdrop-blur text-sm">Behind The Glass Gallery</h2>
                        </div>
                    </Link>
                    <Link href="/events/riser" className="w-1/2 md:w-1/4 relative overflow-hidden">
                        <img src="riser.jpg" className="object-cover h-full w-full hover:scale-110 transition-all" alt="Main Street Riser" />
                        <div className="absolute bottom-0 w-full flex items-center justify-center">
                        <h2 className="text-lg font-semibold font-sans p-2 bg-black/75 text-white w-full text-center backdrop-blur text-sm">Main Street Riser</h2>
                        </div>
                    </Link>
                    <Link href="/events/atrium" className="w-1/2 md:w-1/4 relative overflow-hidden">
                        <img src="atrium2.jpg" className="object-cover h-full w-full hover:scale-110 transition-all" alt="North Atrium" />
                        <div className="absolute bottom-0 w-full flex items-center justify-center">
                        <h2 className="text-lg font-semibold font-sans p-2 bg-black/75 text-white w-full text-center backdrop-blur text-sm">North Atrium</h2>
                        </div>
                    </Link>
                    <Link href="/events/mercantile" className="w-1/2 md:w-1/4 relative overflow-hidden">
                        <img src="wedding2.jpg" className="object-cover h-full w-full hover:scale-110 transition-all" alt="The Full Mercantile On Main" />
                        <div className="absolute bottom-0 w-full flex items-center justify-center">
                        <h2 className="text-lg font-semibold font-sans p-2 bg-black/75 text-white w-full text-center backdrop-blur text-sm">The Full Mercantile</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
