
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
	    }, {
            name: "ROCHESTER SOUR",
            desc: "Bourbon, Peach, Simple Syrup, Tempranillo Float",
            price: "12"
        }, {
            name: "STARBOARD",
            desc: "Spanish Brandy, Scotch, Orange Bitters, Marcona Almond Mist",
            price: "12"
        }, {
            name: "Sangria #1",
            desc: "Vodka, Vinho Verde, Manzanilla, Watermelon, Cucumber, Lemon, Lime",
            price: "13"
        }, {
            name: "Sangira #2",
            desc: "Tequila, Rose Vermouth, Orange, Grapefruit, Lime, Ravines Rose",
            price: "13"
        }],
        unasin: [{
            name: "DENNIS RETIRES IN VENICE",
            desc: "Seedlip Spice, Grapefruit, Maple, Star Anise",
            price: "10"
        }, {
            name: "Hazy Melonade",
            desc: "Watermelon, Lime, Arugula, Strawberry, Hazy IPA (N/A)",
            price: "10"
        }, {
            name: "Sangria Sunrise",
            desc: "Orange, Grapefruit, Lime, Strawberry, Bubbles",
            price: "6"
        }],
		wine: [{
            name: "CAVA",
            desc: "Conquilla, Brut, Spain",
            price: "10/36"
        }, {
            name: "CAVA",
            desc: "Conquilla, Brut Rose, Spain",
            price: "13/42"
        }, {
            name: "Vihno Verde",
            desc: "Quinta Da Lixa, Portugal",
            price: "9/29"
        }, {
            name: "Pinot Grigio",
            desc: "Vigneti Del Sole, Italy",
            price: "10/32"
        }, {
            name: "Sauvignon Blanc",
            desc: "Cannonball, California",
            price: "11/36"
        }, {
            name: "MOSCATO",
            desc: "Mount Hernon, Israel",
            price: "12/40"
        }, {
            name: "ALBARINO",
            desc: "Columna, Spain",
            price: "12/40"
        }, {
            name: "MOSCOFILERO",
            desc: "Domaine Skouras, Greece",
            price: "13/42"
        }, {
            name: "CHARDONNAY",
            desc: "Sean Minor, California",
            price: "13/42"
        }, {
            name: "PINOT NOIR ROSé",
            desc: "Ravines, New York",
            price: "13/42"
        }, {
            name: "ORANGE BLEND",
            desc: "Adega De Penalva, Portugal",
            price: "12/40"
        }, {
            name: "PINOT NOIR",
            desc: "Blood Root, California",
            price: "11/36"
        }, {
            name: "RED BLEND",
            desc: "Boony Doon, California",
            price: "14/48"
        }, {
            name: "TEMPRANILLO",
            desc: "Finca Torremilanos, Spain",
            price: "12/40"
        }],
		domesticWine: [{
            name: "RAVINES, DRY RIESLING, 'ARGETSINGER VINEYARD'",
            desc: "Finger Lakes, 2019",
            price: "48"
        }, {
            name: "LIEU DIT, MELON",
            desc: "Santa Maria Valley, 2021",
            price: "45"
        }, {
            name: "CRISTOM, CHARDONNAY",
            desc: "Eola-Amity Hills, 2020",
            price: "65"
        }, {
            name: "RAMEY, CHARDONNAY",
            desc: "Russian River Valley, 2019",
            price: "75"
        }, {
            name: "LIEU DIT, Gamay",
            desc: "Santa Ynez Valley, 2018",
            price: "55"
        }, {
            name: "OSMOTE, CABERNET FRANC",
            desc: "Finger Lakes, 2021",
            price: "48"
        }, {
            name: "CARDANO, CABERNET SAUVIGNON",
            desc: "Napa Valley, 2018",
            price: "65"
        }],
		importedWine: [{
            name: "HENRI BILLIOT, GRAND CRU RESERVE BRUT",
            desc: "Champange, MV",
            price: "100"
        }, {
            name: "FOLIUM, SAUVIGNON BLANC",
            desc: "Marlborough, 2020",
            price: "45"
        }, {
            name: "MILLE REVES, VOUVRAY",
            desc: "2020",
            price: "40"
        }, {
            name: "LA ANTIGUA CLASSICO, RIOJA BLANCO",
            desc: "2021",
            price: "50"
        }, {
            name: "DOMAINE ARLAUD 'RONCEVIE' BOURGOGNE",
            desc: "2019",
            price: "65"
        }, {
            name: "LUIS SEABRA, 'XISTO ILIMATADO' DOURO",
            desc: "2020",
            price: "55"
        }, {
            name: "BODEGAS VIZCARRA RAMOS, 'JC'",
            desc: "Ribera Del Duero, 2019",
            price: "70"

        }],
		draftBeer: [{
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
            name: "MORTALIS",
            desc: "Rotating Selection",
            price: "9"
        }, {
            name: "BRINDLE HAUS",
            desc: "Rotating Selection",
            price: "8"
        }, {
            name: "N/A BEER",
            desc: "Rotating Selection",
            price: "5"
        }, {
            name: "HIGH NOON",
            desc: "Assorted Flavors",
            price: "7"
        }],
        bottledBeer: [{
            name: "COORS LIGHT",
            desc: "",
            price: "5"
        }, {
            name: "LABATT BLUE",
            desc: "",
            price: "5"
        }, {
            name: "LABATT BLUE LIGHT",
            desc: "",
            price: "5"
        }, {
            name: "HEINEKEN",
            desc: "",
            price: "6"
        }, {
            name: "ESTRELLA DAMM",
            desc: "",
            price: "6"
        }],
        beverages: [{
            name: "COKE PRODUCTS",
            desc: "Coke, Diet Coke, Sprite, Ginger Ale",
            price: "2"
        }, {
            name: "GALAVANIA",
            desc: "Blood Orange Soda, Pomegranate Soda",
            price: "4"
        }, {
            name: "HARNEY'S",
            desc: "Black Iced Tea, Currant Tea",
            price: "4"
        }, {
            name: "HANKS'S GRAPE SODA",
            desc: "",
            price: "4"
        }, {
            name: "JONE'S ROOT BEER",
            desc: "",
            price: "4"
        }, {
            name: "SARATOGA SPARKLING WATER",
            desc: "",
            price: "3"
        }, {
            name: "FIJI STILL WATER",
            desc: "",
            price: "3"
        }, {
            name: "HOT TEA & COFFEE",
            desc: "Ask Your Server About Our Current Selection",
            price: "~"
        }]
	    }

        switch(pageProps.tab) {
            case "specials":
                return (
                    <>
                        <p className="text-lg font-bold italic font-serif mx-auto mt-8 mb-16 w-full text-center">Ask Your Server Or Call For Daily Specials</p>
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
                        <Section title="Una Sin (Alcohol Free)" sectionItems={menu.unasin}/>
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
                        <Section title="N/A Beverages" sectionItems={menu.beverages}/>
                    </>
                )
        }
    }
}
