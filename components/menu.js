
import Section from "./section"

export default function Menu(pageProps) {
    {

	const menu = {
		specials: [{
			name: "Conservas",
			desc: "Description",
			price: "Test"
		}],
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
		}],
		sandwiches: [{
			name: "PERENNE",
			desc: "Shaved Beef, Arugula, Gorgonzola, Chimichurri",
			price: "17"
		}],
		entrees: [{
			name: "CHICKEN SKEWERS",
			desc: "Herb-Marinated Chicken, Spiced Yogurt, House Salad, Saffron Basmati Rice, House-Made Pita",
			price: "17"
		}],
		more: [{
			name: "HOUSE SALAD",
			desc: "Mixed Mediterranean Salad Greens, Radishes, Tomatoes, Cucumbers, Sherry Vinaigrette",
			price: "5"
		}],
		cocktails: [],
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
                        <Section title="Specials" sectionItems={menu.specials}/>
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
                        <Section title="Cocktails" sectionItems={menu.specials}/>
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
