import "./Header.scss";
import Icon from "../Img/header-icon.svg";
import Logo from "../Img/header-logo.svg";
import Menu from "../Img/menu.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__flex">
            <a className="header__icon-link" href="#">
              <img
                className="header__icon"
                src={Icon}
                alt="icon"
                width={31}
                height={31}
              />
            </a>

            <a className="header__logo-link" href="#">
              <img
                className="header__logo"
                src={Logo}
                alt="logo"
                width={91}
                height={30}
              />
            </a>
          </div>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#">
                  About
                </a>
                <a className="nav__link" href="#">
                  Blog
                </a>
                <a className="nav__link" href="#">
                  Agency
                </a>
                <a className="nav__link" href="#">
                  Featured
                </a>
                <a className="nav__link" href="#">
                  Price
                </a>
              </li>
              <a className="nav__link-img" href="#">
                <img src={Menu} alt="menu" width={30} height={14} />
              </a>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
