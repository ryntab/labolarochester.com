export default function Item({ name, price, desc, items }) {
    console.log('Item', name, price, desc, items)
    return (
        <div className="mr-2">
            <span className="flex justify-between border-b-2 border-dotted border-black">
                <h2 className="font-semibold uppercase"> {name}</h2>
                <b className="ml-2 font-bold lowercase"> {price ? '$' + price : ''} </b>
            </span>
            <p className="mb-4 mt-2 italic text-sm"> {desc} </p>

            {items && items.length > 0 && (
                <ul className="list-none mb-6">
                    {items.map(item => (
                        <li key={item.id} className="mb-2 flex flex-row justify-between">
                            <h2 className="font-semibold uppercase text-xs"> {item.Name}</h2>
                            <b className="ml-2 font-bold lowercase text-xs"> {item.Price ? '$' + item.Price : ''} </b>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
