
import Section from "./section.js"

export default function Menu(pageProps) {
    {

	const menu = {
		tapas: [{
			name: "PATATAS BRAVAS",
			desc: "Crispy Potatoes, Spicy Bravas Sauce, Lemon Aioli",
			price: "10"
		},
		{
			name: "PAN CON TOMATE",
			desc: "Tomato Spread, Sea Salt, Spanish Olive Oil, House-Made Sourdough",
			price: "7"
		},
		{
			name: "SEASONAL RICOTTA TOAST",
			desc: "Seasonal Marmalade, Marcona Almonds, Maldon Sea Salt, Black Pepper Honey",
			price: "10"
		},
		{
			name: "CHARCUTERIE",
			desc: "Rotating Cheeses & Cured Meats, Seasonal Jam, Marcona Almonds, Olives, Spicy Mustard, Assorted House-Made Breads",
			price: "21/35"
		}, 
		{
			name: "IMPORTED CONSERVAS",
			desc: "Wild Cockles in Salt Brine, Octopus In Olive Oil, Razor Clams In Salt Brine, Scallops in Olive Oil and Tomato Sauce",
			price: "17/30"
		}, 
		{
			name: "SAFFRON ROMESCO",
			desc: "Yellow Pepper, Sungold Tomato, Hazelnuts, Marcona Almonds. Served With Flatbread.",
			price: "8"
		},
		{
			name: "ZUCCHINI DIP",
			desc: "Yogurt, Mint, Pistachio, Perserved Lemon. Served With Flatbread",
			price: "8"
		}, 
		{
			name: "SMOKE SALMON & TROUT DIP",
			desc: "Lemon Aioli, Shallots, Dill. Served With Flatbread",
			price: "9"
		}],
		sandwiches: [{
			name: "PERENNE",
			desc: "Shaved Beef, Arugula, Gorgonzola, Chimichurri",
			price: "17"
		}, {
			name: "LA RAMBLA",
			desc: "Chorizo, Peaches, Goat Cheese, Arugula Pesto",
			price: "14"
		}, {
			name: "EL MAR",
			desc: "Olive Oil Poached Tuna, Piquillo Peppers, Onion Marmalade",
			price: "17"
		}, {
			name: "ROSALINA",
			desc: "Eggplant, Roasted Figs, Manchengo, Sherry",
			price: "14"
		}, {
			name: "ISABELLA",
			desc: "Serrano Ham, Grand Cru, Tomato Spread",
			price: "13"
		}],
		entrees: [{
			name: "CHICKEN SKEWERS",
			desc: "Herb-Marinated Chicken, Spiced Yogurt, House Salad, Saffron Basmati Rice, House-Made Pita",
			price: "17"
		}, {
			name: "LAMB MEATBALLS",
			desc: "Spiced Yogurt, Salsa Bravas, House-Made Pita",
			price: "18"
		}, {
			name: "SHRIMP RISOTTO",
			desc: "Grilled Shrimp, Paella Risotto, Saffron Aioli",
			price: "18"
		}, {
			name: "PASTA",
			desc: "Campanella with Corn, Zucchini, Cherry Tomato, Basil, Egg, Pecorino",
			price: "16"
		}, {
			name: "BOLA BURGER",
			desc: "Double 1/3lb Patties, Onion Jam, Lemon Aioli, Grand Cru, Lettuce, Pork Belly",
			price: "17"
		}],
		more: [{
			name: "HOUSE SALAD",
			desc: "Mixed Mediterranean Salad Greens, Radishes, Tomatoes, Cucumbers, Sherry Vinaigrette",
			price: "5"
		}, {
			name: "BERRY & MELON SALAD",
			desc: "Lime, Black Pepper, Cilantro, Basil, Feta, Honey",
			price: "10"
		}, {
			name: "PEACH & TOMATO SALAD",
			desc: "Burrata, Cucumber, Black Pepper",
			price: "10"
		}, {
			name: "CORN SALAD",
			desc: "Halloumi, Cherry Tomatoes, Chives, Basil, Yogurt",
			price: "10"
		}],
		cocktails: [{
			name: "SEVILLA SPRITZ",
			desc: "Tanquery Sevilla Orange, Strawberry, Aperol, Ginger, Cava",
			price: "12"
		}, {
			name: "ROCOCO LOCO",
			desc: "Vodka, Espresso, Maple, Cinnamon, Rosemary",
			price: "14"
		}, {
			name: "LA PERLA",
			desc: "Tequila, Manzanilla, Pear, Lemon",
			price: "12"
		}, {
			name: "MERC MARG",
			desc: "Tequila, Apricot, Thyme, Lime",
			price: "12"
		}, {
			name: "VAULT SOUR",
			desc: "Vodka, Campari, Agave, Lemon, Orange",
			price: "12"
		}, {
			name: "LA BOLA OLD FASHIONED",
			desc:"Tequila, Sage Syrup, Orange, Bitters",
			price: "12"
	    }],
		wine: [{
            name: "CAVA",
            desc: "Conquilla, Brut - N/V",
            price: "10/36"
        }],
		domesticWine: [{
            name: "RAVINES. DRY RIESLING, 'ARGETSINGER VINEYARD', FINGER LAKES, 2019",
            desc: " ",
            price: "48"
        }, {
            name: "LIEU DIT, MELON, SANTA MARIA VALLEY, 2021",
            desc: " ",
            price: "45"
        }, {
            name: "CRISTOM, CHARDONNAY, EOLA-AMITY HILLS, 2020",
            desc: "",
            price: "65"
        }, {
            name: "RAMEY, CHARDONNAY, RUSSIAN RIVER VALLEY, 2019",
            desc: "",
            price: "75"
        }],
		importedWine: [{
            name: "HENRI BILLIOT, GRAND CRU RESERVE BRUT, CHAMPANGE, MV",
            desc: "",
            price: "100"
        }, {
            name: "FOLIUM, SAUVIGNON BLANC MARLBOROUGH, 2020",
            desc: "",
            price: "45"
        }, {
            name: "MILLE REVES, VOUVRAY, 2020",
            desc: "",
            price: "40"
        }, {
            name: "LA ANTIGUA CLASSICO, RIOJA BLANCO, 2021",
            desc: "",
            price: "50"
        }, {
            name: "DOMAINE ARLAUD 'RONCEVIE' BOURGOGNE, 2019",
            desc: "",
            price: "65"
        }, {
            name: "VINHOS FITAPERTA, 'A TOURIGA VIA NUA' ALENTEJANO, 2020",
            desc: "",
            price: "48"
        }, {
            name: "LUIS SEABRA, 'XISTO ILIMATADO' DOURO, 2020",
            desc: "",
            price: "55"
        }, {
            name: "BODEGAS VIZCARRA RAMOS, 'JC' RIBERA DEL DUERO, 2019",
            desc: "",
            price: "70"

        }],
		draftBeer: [{
            name: "OTHER HALF - ROTATING SELECTION",
            desc: "",
            price: ""
        }, {
            name: "BRINDLE HAUS - ROTATING SELECTION",
            desc: "",
            price: ""
        }, {
            name: "FIFTH FRAME - CRISPY LIGHT",
            desc: "",
            price: ""
        }, {
            name: "STEUBEN BREWING - OCTOBERFEST",
            desc: "",
            price: ""
        }, {
            name: "RISING STORM - HAWAIIAN PUNCH SOUR",
            desc: "",
            price: ""
        }, {
            name: "GENESEE - PINEAPPLE KOLSCH",
            desc: "",
            price: ""
        }],
		cannedBeer: [{
            name: "BRINDLEHAUS - BLACKBERRY WAFFLE CONE",
            desc: "",
            price: ""
        }, {
            name: "K2 - PATRIOT POP SOUR",
            desc: "",
            price: ""
        }],
        bottledBeer: [{
            name: "MORITZ - BARCELONA PILSNER",
            desc: "",
            price: ""
        }, {
            name: "COORS LIGHT",
            desc: "",
            price: ""
        }]
	    }

        switch(pageProps.tab) {
            case "specials":
                return (
                    <>
                        <p className="text-lg font-bold italic font-serif mx-auto mt-8 mb-16">Ask Your Server Or Call For Daily Specials</p>
                    </>
                )
            case "menu":
                return (
                    <>
                        <Section title="Tapas" sectionItems={menu.tapas}/>
                        <Section title="Sandwiches" sectionItems={menu.sandwiches}/>
                        <Section title="Salads" sectionItems={menu.more}/>
			            <Section title="Entrees" sectionItems={menu.entrees}/>
                    </>
                )
            case "cocktails":
                return (
                    <>
                        <Section title="Cocktails" sectionItems={menu.cocktails}/>
                    </>
                )
            case "wine":
                return (
                    <>
                        <Section title="Wine" sectionItems={menu.wine}/>
                        <Section title="Domestic Bottles" sectionItems={menu.domesticWine}/>
                        <Section title="Imported Bottles" sectionItems={menu.importedWine}/>
                    </>
                )
            case "beer":
                return (
                    <>
                        <Section title="Draft" sectionItems={menu.draftBeer}/>
                        <Section title="Canned" sectionItems={menu.cannedBeer}/>
                        <Section title="Bottled" sectionItems={menu.bottledBeer}/>
                    </>
                )
        }
    }
}
