import React from 'react';

const Header = () => {
  const handleLogoClick = (evt) => {
    evt.preventDefault();
  };

  return (
    <header className="header">
      <div className="header__container container">
        <a onClick={handleLogoClick} href="index.html" className="header__logo logo logo--header">
          <picture>
            <img src="img/logo-header.png" alt="Интернет магазин светильников I-lights" width="75"
              className="logo--header__img" />
          </picture>
        </a>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item main-nav__item--active">
              <a href="#" className="main-nav__link">О компании</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Услуги</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Проекты</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Доставка и оплата</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Контакты</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link main-nav__set main-nav__set--active">Подборка <span></span></a>
            </li>
          </ul>
        </nav>
        <a href="email:info@i-lights.ru" className="header__link header__link-email">
          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M14.5832 2.25004C14.5832 1.47087 13.9457 0.833374 13.1665 0.833374H1.83317C1.054 0.833374 0.416504 1.47087 0.416504 2.25004V10.75C0.416504 11.5292 1.054 12.1667 1.83317 12.1667H13.1665C13.9457 12.1667 14.5832 11.5292 14.5832 10.75V2.25004ZM13.1665 2.25003L7.49982 5.7917L1.83316 2.25003H13.1665ZM13.1665 10.75H1.83316V3.6667L7.49982 7.20836L13.1665 3.6667V10.75Z"/>
          </svg>
          info@i-lights.ru
        </a>
        <a href="tel:+74952335557" className="header__link header__link-phone">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.799988 2.33338C0.799988 1.92672 0.961532 1.5367 1.24909 1.24915C1.53664 0.961593 1.92666 0.800049 2.33332 0.800049H4.84799C5.00883 0.800169 5.16556 0.850873 5.296 0.944985C5.42643 1.0391 5.52396 1.17185 5.57479 1.32445L6.72325 4.76908C6.78144 4.94414 6.77456 5.13431 6.70387 5.30471C6.63318 5.4751 6.50341 5.6143 6.33839 5.69674L4.60802 6.56308C5.4562 8.44029 6.95974 9.94381 8.83695 10.792L9.70327 9.06165C9.78575 8.89661 9.92495 8.76685 10.0953 8.69613C10.2657 8.62549 10.4559 8.61861 10.6309 8.67677L14.0756 9.82525C14.2283 9.87613 14.3612 9.97373 14.4553 10.1044C14.5494 10.2349 14.6 10.3918 14.6 10.5528V13.0667C14.6 13.4734 14.4385 13.8634 14.1509 14.1509C13.8633 14.4385 13.4733 14.6 13.0666 14.6H12.3C5.94892 14.6 0.799988 9.45109 0.799988 3.10005V2.33338Z"/>
          </svg>
          +7 (495)&ensp;233 55 57
        </a>
        <button className="burger btn-reset">
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
