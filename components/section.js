
import Item from "./Item"

export default function Section(pageProps) {
    return (
    <div className="lg:w-1/4 mx-4 font-serif">
        <h1 className="text-2xl mb-8 font-semibold"> {pageProps.title} </h1>
	{pageProps.sectionItems.map((sectionItem, index) => (
        	<Item name={sectionItem.name} price={sectionItem.price} desc={sectionItem.desc}/>
	))}
    </div>
    )
}
