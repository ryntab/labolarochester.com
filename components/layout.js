import Header from './header';
import Footer from './footer';


export default function Layout({children}) {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Header/>
                {children}
                <Footer/>
            </div>
        </div>
    )
}