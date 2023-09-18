import Header from './header';
import Footer from './footer';


export default function Layout({children}) {
    return (
        <div className="mx-auto">
                <Header/>
                <div className='max-w-7xl mx-auto'>
                    {children}
                </div>
                <Footer/>
        </div>
    )
}