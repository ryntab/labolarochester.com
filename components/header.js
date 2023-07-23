export default function Header() {
    return(
        <>
            <div className="backdrop-blur border-b-2 border-slate-500 max-w-7xl w-full bg-black/75 h-16 md:h-24 flex shadow-2xl shadow-black overflow-visible fixed z-50 justify-content-between">
                <div className="w-2/5 md:w-2/5 bg-gradient-to-r from-slate-900 flex items-center">
                    <button class="text-white text-xl font-semibold pl-8 visible md:invisible w-auto md:w-0">
                        <span class="hamburger-bar"></span>
                        <span class="hamburger-bar"></span>
                        <span class="hamburger-bar"></span>
                    </button>
                    <img src="./avvino.png" className="h-12 w-0 sm:w-auto object-fit mx-0 sm:ml-8 invisible sm:visible"/>
                </div>
                <div className="w-32 md:h-48 h-32 border-2 md:w-48 mx-auto backdrop-blur -mt-2 bg-black/100 border-slate-500 /75 rounded-b-full shadow-2xl shadow-black ">
                    <img src="/logo.png" className="object-cover md:mt-8 mt-4 w-20 md:w-32 relative mx-auto overflow-visible"></img>
                </div>
                <div className="w-2/5 bg-gradient-to-r from-black/0 to-black/100 flex items-center">
                    <div className="w-full font-semibold text-slate-100 text-center pr-4 pl-4 invisible md:visible">
                        <a className="pr-2"> Home </a>
                        <a className="px-2"> About </a>
                        <a className="px-2"> Contact </a>
                        <a className="px-2"> Menu </a>
                    </div>
                </div>
            </div>
        </>
    )
}

{/** https://coolors.co/006e90-f18f01-adcad6-99c24d-41bbd9 **/}