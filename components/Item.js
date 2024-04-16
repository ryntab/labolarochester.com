export default function Item(pageProps) {
    return (
        <div className="mr-2">
            <span className="flex justify-between border-b-2 border-dotted border-black">
                <h2 className="font-semibold uppercase"> {pageProps.name}</h2>
                <b className="ml-2 font-bold lowercase"> ${pageProps.price} </b>
            </span>
            <p className="mb-4 mt-2 italic text-sm"> {pageProps.desc} </p>
        </div>
    )
}
