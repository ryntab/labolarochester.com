import Header from './header';


export default function Layout({children}) {
    return (
        <div className="mx-auto">
                <Header/>
                <div className='max-w-7xl mx-auto'>
                    {children}
                </div>
        </div>
    )
}