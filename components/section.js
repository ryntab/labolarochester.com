
import Item from "./Item"

export default function Section(pageProps) {
    return (
    <div className="lg:w-1/3 font-serif">
        <h1 className="text-2xl mb-8 font-semibold"> {pageProps.title} </h1>
        <Item name="Imported Conservas" price="mkt. /tin" desc="Cockles, Octopus, Razor Clams or Scallops "/>
    </div>
    )
}