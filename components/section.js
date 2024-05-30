import React from 'react';
import Item from "./Item";

export default function Section(pageProps) {
  return (
    <div className="mb-16 lg:mt-0 font-serif max-w-lg mx-2 w-full">
      <h1 className="text-2xl mb-8 font-semibold">{pageProps.title}</h1>
      {pageProps.sectionItems
        .filter(sectionItem => sectionItem.Section == pageProps.tabName)
        .map((sectionItem, index) => (
          <Item
            key={index} 
            name={sectionItem.Name}
            price={sectionItem.Price}
            desc={sectionItem.Description}
            items={sectionItem.Items}
          />
      ))}
    </div>
  );
}
