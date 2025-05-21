import { Link } from 'react-router-dom';

interface NavItem {
  text: string;
  path: string;
}

export default function Header() {

const navItems: NavItem [] = [
  {text :'Accueil', path:"/"},
  {text:'Connexion', path:"/connexion"},
  {text:'Inscription', path:"/inscription"},


]

    return(

      <header className="home-header">
      <nav className="l-main-nav">
        <div className="u-container l-main-nav__container">
          <a href="./index.html" className="l-main-nav__logo">O'GPQuiz</a>
          <button className="l-main-nav__toggle-button">
            <img
              src="./integration/menu.png"
              alt="toggle mobile menu"
              className="l-main-nav__toggle-logo"
              width="50"
              height="50"
            />
          </button>
          <ul className="l-main-nav__list">
           {navItems.map((item, index)=> (
            <Link className="l-main-nav__link" key={index} to={item.path}>{item.text}</Link>           
           ))}

          </ul> 
          </div>       
      </nav>
      <div className="home-header__faded-bg"></div>
    <img
      src="./integration/damier1.jpg"
      alt="drapeau à damier"
      className="home-header__flag" width="947" height="674"/>
    <div className="u_container home-header__container">
     <h1 className="u-main-title home-header__title">Si tu penses connaitre le MotoGP25 , 
      teste toi 😄
     </h1>
      <a href="#" className="c-red-link home-header__cta"> Choisis ton quiz 🏍️ </a>
  </div>
     

    </header>
      
    )
}