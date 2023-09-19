
import Section from "./section"

export default function Menu(pageProps) {
    {
        switch(pageProps.tab) {
            case "specials":
                return (
                    <>
                        <Section title="Specials"/>
                    </>
                )
            case "menu":
                return (
                    <>
                        <Section title="Tapas"/>
                        <Section title="Sandwiches"/>
                        <Section title="More"/>
                    </>
                )
            case "cocktails":
                return (
                    <>
                        <Section title="Cocktails"/>
                    </>
                )
            case "wine":
                return (
                    <>
                        <Section title="Red"/>
                        <Section title="White"/>
                        <Section title="Green"/>
                    </>
                )
            case "beer":
                return (
                    <>
                        <Section title="Canned"/>
                        <Section title="Draft"/>
                    </>
                )
        }
    }
}