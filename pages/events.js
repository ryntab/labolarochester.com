import Link from "next/link";

export default function Event() {
    return(
        <div className="max-w-7xl bg-white">
            <div className="">
                <div className="relative">
                    <img src="/hero2.jpg" className="h-full w-full min-h-[50vh] object-cover" alt="Background Image" />
                    <div className="absolute bottom-0 left-0 pb-12 w-full">
                        <h1 className="text-display text-4xl p-6 bg-gradient-to-r from-black to-black/0 text-white block">
                            Host Your Event With La Bola
                        </h1>
                    </div>
                </div>
                <div className="flex flex-wrap mt-6">
                    <div className="w-1/2 md:w-1/4 h-[25vh] relative">
                        <img src="glassGallery.jpg" className="object-cover h-full w-full" alt="Glass Gallery" />
                        <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-lg font-semibold font-sans p-2 bg-black/25 text-white w-full text-center backdrop-blur">Behind The Glass Gallery</h2>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 h-[25vh] relative">
                        <img src="riser.jpg" className="object-cover h-full w-full" alt="Main Street Riser" />
                        <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-lg font-semibold font-sans p-2 bg-black/25 text-white w-full text-center backdrop-blur">Main Street Riser</h2>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 h-[25vh] relative">
                        <img src="atrium2.jpg" className="object-cover h-full w-full" alt="North Atrium" />
                        <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-lg font-semibold font-sans p-2 bg-black/25 text-white w-full text-center backdrop-blur">North Atrium</h2>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 h-[25vh] relative">
                        <img src="wedding2.jpg" className="object-cover h-full w-full" alt="The Full Mercantile On Main" />
                        <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-lg font-semibold font-sans p-2 bg-black/25 text-white w-full text-center backdrop-blur">The Mercantile On Main</h2>
                        </div>
                    </div>
                </div>
                <div className="md:flex p-6">
                    <div className="md:w-1/2 relative">
                        <img src="mercantile.jpg" className="object-cover md:w-full"></img>
                    </div>
                    <div className="w-full bg-white p-6 w-full inset-0">
                        <h3 className="font-semibold text-xl pb-2">
                            Your Ideal Event Space
                        </h3>
                        <p className="leading-6 font-sans">
                            Discover the perfect venue for your upcoming event, whether it&apos;s an office happy hour, an intimate private dinner, a joyous baby shower, a memorable wedding, or any other private or public occasion. At our establishment, we offer a versatile range of event spaces to suit your needs.

                            With over 4,000 square feet of customizable space and various venue sizes available, we can cater to gatherings of all sizes. Whether you&apos;re planning an intimate dinner for six or a conference for up to 600 attendees, we have the ideal space for you.

                            Our dedicated team and trusted partners are here to make your event exceptional. We can assist you in creating a tailored ambiance with personalized decorations, collaborate with you to craft a unique menu, and can provide the assistance of an experienced event coordinator if needed. Your special day is important to us, and we&apos;re committed to ensuring a seamless and memorable experience.
                        </p>
                        <div className="w-full text-right">
                            <Link href="/bookAnEvent" className="bg-black font-semibold text-slate-100 mx-auto py-2 inline-block px-4 mt-4">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}