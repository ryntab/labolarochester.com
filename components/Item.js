export default function Item(pageProps) {
    return (
        <>
            <h2 className="font-semibold uppercase"> {pageProps.name} <b className="ml-2 font-bold lowercase"> {pageProps.price} </b></h2>
            <p className="mb-4"> Cockles, Octopus, Razor Clams or Scallops </p>
        </>
    )
}