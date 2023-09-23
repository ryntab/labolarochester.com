
import Section from "./section"

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
			desc: "Yellow Pepper, Sungold Tomato, Hazelnuts, Marcona Almonds. Served With flatbread.",
			price: "8"
		},
		{
			name: "ZUCCHINI DIP",
			desc: "Yogurt, Mint, Pistachio, Perserved Lemon",
			price: "8"
		}, 
		{
			name: "SMOKE SALMON & TROUT DIP",
			desc: "Lemon Aoli, Shallots, Dill",
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
		redWine: [],
		whiteWine: [],
		greenWine: [],
		cannedBeer: [],
		draftBeer: []
	}

        switch(pageProps.tab) {
            case "specials":
                return (
                    <>
                        <p className="text-lg italic mx-auto my-8">Ask Your Server Or Call For Daily Specials</p>
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
                        <Section title="Red" sectionItems={menu.specials}/>
                        <Section title="White" sectionItems={menu.specials}/>
                        <Section title="Green" sectionItems={menu.specials}/>
                    </>
                )
            case "beer":
                return (
                    <>
                        <Section title="Canned" sectionItems={menu.specials}/>
                        <Section title="Draft" sectionItems={menu.specials}/>
                    </>
                )
        }
    }
}
