
import Section from "./section.js"

import React, { useEffect, useState } from 'react';


export default function Menu(pageProps) {

    const [menu, setMenu] = useState(null);

    useEffect(() => {
    // Fetch menu data based on pageProps.tab
    const fetchMenu = async () => {
        try {
        const response = await fetch(`https://cms.dylandunn.me/menu-items`);
        const data = await response.json();
        setMenu(data);
        console.log(data)
        } catch (error) {
        console.error('Error fetching menu:', error);
        }
    };


    fetchMenu();
    }, [pageProps.tab]);

    if (!menu) {
    return null; // Or you can display a loading state
    }

    {


        switch(pageProps.tab) {
            case "specials":
                return (
                    <>
                        <Section title="Specials" sectionItems={menu} tabName="specials"/>
                    </>
                )
            case "menu":
                return (
                    <>
                        <Section title="Tapas" sectionItems={menu} tabName="tapas"/>
                        <Section title="Sandwiches" sectionItems={menu} tabName="sandwiches"/>
                        <Section title="Soups and Salads" sectionItems={menu} tabName="soupandsalad"/>
			            <Section title="Entrees" sectionItems={menu} tabName="entrees"/>
                    </>
                )
            case "cocktails":
                return (
                    <>
                        <Section title="Cocktails" sectionItems={menu} tabName="cocktails"/>
                        <Section title="Una Sin (Alcohol Free)" sectionItems={menu} tabName="unaSin"/>
                    </>
                )
            case "wine":
                return (
                    <>
                        <Section title="Wine" sectionItems={menu} tabName="wine"/>
                        <Section title="Domestic Bottles" sectionItems={menu} tabName="domesticWine"/>
                        <Section title="Imported Bottles" sectionItems={menu} tabName="importWine"/>
                    </>
                )
            case "beer":
                return (
                    <>
                        <Section title="Draft" sectionItems={menu} tabName="draftBeer"/>
                        <Section title="Canned" sectionItems={menu} tabName="cannedBeer"/>
                        <Section title="Bottled" sectionItems={menu} tabName="bottledBeer"/>
                        <Section title="N/A Beverages" sectionItems={menu} tabName="otherBeverages"/>
                    </>
                )
        }
    }
}
