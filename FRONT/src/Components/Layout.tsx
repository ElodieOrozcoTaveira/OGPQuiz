import { Outlet } from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";


export default function Layout() {
    return(
        <div className='layout-wrapper'>
             <main className='main-container'>
                  <Header/>
                <section className="content-container">
                {/* c'est ici que les pages enfants comme Hompage, inscription.. seront rendues , outlet va permettre de rendre les pages*/}
                <Outlet/>
                </section>
                </main>
                <Footer/>     
        </div>
    )
}