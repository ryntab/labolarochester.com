
import Section from "./section"

export default function Menu(pageProps) {
    {
        switch(pageProps.tab) {
            case "specials":
                return (
                    <div className="text-slate-900 bg-white/75 text-center text-slate-800 lg:flex p-4 pt-16">
                        <Section title="Specials"/>
                    </div>
                )
            case "menu":
                return (
                    <div className="text-slate-900 bg-white/75 text-center text-slate-800 lg:flex p-4 pt-16">
                        <Section title="Tapas"/>
                        <Section title="Sandwiches"/>
                        <Section title="More"/>
                    </div>
                )
            case "cocktails":
                return (
                    <div className="text-slate-900 bg-white/75 text-center text-slate-800 lg:flex p-4 pt-16">
                        <Section title="Cocktails"/>
                    </div>
                )
            case "wine":
                return (
                    <div className="text-slate-900 bg-white/75 text-center text-slate-800 lg:flex p-4 pt-16">
                        <Section title="Red"/>
                        <Section title="White"/>
                        <Section title="Green"/>
                    </div>
                )
            case "beer":
                return (
                    <div className="text-slate-900 bg-white/75 text-center text-slate-800 lg:flex p-4 pt-16">
                        <Section title="Canned"/>
                        <Section title="Draft"/>
                    </div>
                )
        }
    }
}