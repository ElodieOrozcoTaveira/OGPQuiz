
export default function Header() {
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
            <li><a className="l-main-nav__link" href="#">Connexion</a></li>
            <li><a className="l-main-nav__link" href="#">Inscription</a></li>
          </ul> 
          </div>        
      </nav>
      <div className="home-header__faded-bg"></div>
    <img
      src="./integration/damier1.jpg"
      alt="drapeau à damier"
      className="home-header__flag" width="947" height="674"/>
    <div className="u_container home-header__container">
     <h1 className="u-main-title home-header__title">Tu penses connaître le MotoGp?</h1>
      <a href="#" className="c-red-link home-header__cta"> Choisis ton Quiz   🏍️</a>
  </div>
     

    </header>
      
    )
}