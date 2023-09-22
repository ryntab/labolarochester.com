
import Section from "./section"

export default function Menu(pageProps) {
    {
        switch(pageProps.tab) {
            case "specials":
                return (
                    <>
                        <Section title="Specials" sectionItems=${menu.specials}/>
                    </>
                )
            case "menu":
                return (
                    <>
                        <Section title="Tapas" sectionItems=${menu.tapas}/>
                        <Section title="Sandwiches" sectionItems=${menu.sandwiches}/>
                        <Section title="More" sectionItems.more/>
                    </>
                )
            case "cocktails":
                return (
                    <>
                        <Section title="Cocktails" sectionItems=${menu.cocktails}/>
                    </>
                )
            case "wine":
                return (
                    <>
                        <Section title="Red" sectionItems=${menu.redWine}/>
                        <Section title="White" sectionItems=${menu.whiteWine}/>
                        <Section title="Green" sectionItems=${menu.greenWine}/>
                    </>
                )
            case "beer":
                return (
                    <>
                        <Section title="Canned" sectionItems=${menu.cannedBeer}/>
                        <Section title="Draft" sectionItems=${menu.draftBeer}/>
                    </>
                )
        }
    }
}
