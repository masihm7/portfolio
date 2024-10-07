import profile from '../assets/profile.png'

export const Header=()=>{
    return(
        <header className="main-header">
    <div className="main-header__logo-container">
      <div className="main-header__logo-img-cont">
        <img
          src={profile}
          alt="logo Image" className="main-header__logo-img" />
      </div>
      <h4 className="main-header__logo-text">Manish Masih</h4>
    </div>
    <nav className="main-header__navigation">
      <ul className="main-header__navigation-links">
        <li className="main-header__navigation-link"><a href="./index.html"> Home </a></li>
        <li className="main-header__navigation-link"><a href="./index.html#about"> About </a></li>
        <li className="main-header__navigation-link">
          <a href="./index.html#projects"> Projects </a>
        </li>
        <li className="main-header__navigation-link"><a href="./index.html#contact" > Contact </a></li>
      </ul>
    </nav>
    <div className="main-header__sm-scr-nav-btn">
      <div className="main-header__sm-scr-nav-btn-line"></div>
      <div className="main-header__sm-scr-nav-btn-line"></div>
    </div>
    <div className="main-header__sm-menu">
      <div className="main-header__sm-menu-close">

      </div>
      <ul className="main-header__sm-menu-links">
        <li>
          <a className="main-header__sm-menu-link main-header__sm-menu-link--1" name="home-hero">Home</a>
        </li>

        <li>
          <a className="main-header__sm-menu-link main-header__sm-menu-link--2" name="about">About</a>
        </li>
        <li>
          <a className="main-header__sm-menu-link main-header__sm-menu-link--3" name="projects">Projects</a>
        </li>
        <li>
          <a className="main-header__sm-menu-link main-header__sm-menu-link--4" name="contact">Contact</a>
        </li>
      </ul>
    </div>
    <button  onClick={() => window.open('https://drive.google.com/file/d/1MqvDYuhUEnrmLnDCJKRHHaRGqBEQ3F1c/view?usp=sharing', '_blank')} className="btn btn-theme btn-sm">Resume</button>
  </header>

    )
}
