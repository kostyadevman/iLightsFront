import React from 'react';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__col">
          <a href="index.html" className="footer__logo logo">
            <picture>
              <img src="img/logo-header.png" alt="Интернет магазин светильников I-lights" width="75"
                className="logo--footer__img" />
            </picture>
          </a>
          <p className="copyright">© Technolight 2015-2021</p>
        </div>
        <div className="footer__catalog">
          <h3 className="footer__title">Каталог товаров</h3>
          <ul className="footer__list ">
            <li className="footer__item"><a href="#" className="footer__link">Трековые светильники</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Встраиваемые светильники</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Профильные светильники</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Фигурные светильники</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Светильники Армстронг</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Армстронг с равномерной засветкой</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Произовдители</a></li>
          </ul>
        </div>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item"><a href="#" className="footer__nav-link">Как заказать</a></li>
            <li className="footer__nav-item"><a href="#" className="footer__nav-link">Оплата</a></li>
            <li className="footer__nav-item"><a href="#" className="footer__nav-link">Доставка</a></li>
            <li className="footer__nav-item"><a href="#" className="footer__nav-link">Реквизиты компании</a></li>
            <li className="footer__nav-item"><a href="#" className="footer__nav-link">Правовая информация</a></li>
            <li className="footer__nav-item"><a href="#" className="footer__nav-link">FAQ</a></li>
          </ul>
        </nav>
        <div className="footer__contact contact">
          <h3 className="footer__title contact__title">Контакты</h3>
          <ul className="contact__list">
            <li className="contact__item">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 0C6.12297 0 2.96875 3.15422 2.96875 7.03125C2.96875 8.34117 3.3316 9.61953 4.01832 10.7286L9.59977 19.723C9.70668 19.8953 9.89504 20 10.0976 20C10.0992 20 10.1007 20 10.1023 20C10.3066 19.9984 10.4954 19.8905 10.6003 19.7152L16.0395 10.6336C16.6883 9.54797 17.0312 8.30231 17.0312 7.03125C17.0312 3.15422 13.877 0 10 0ZM15.0338 10.032L10.0887 18.2885L5.01434 10.1112C4.44273 9.18805 4.13281 8.12305 4.13281 7.03125C4.13281 3.80039 6.76914 1.16406 10 1.16406C13.2309 1.16406 15.8633 3.80039 15.8633 7.03125C15.8633 8.09066 15.5738 9.12844 15.0338 10.032Z"
                  fill="#F3A800"/>
                <path
                  d="M10 3.51562C8.06148 3.51562 6.48438 5.09273 6.48438 7.03125C6.48438 8.95738 8.03582 10.5469 10 10.5469C11.9884 10.5469 13.5156 8.93621 13.5156 7.03125C13.5156 5.09273 11.9385 3.51562 10 3.51562ZM10 9.38281C8.7009 9.38281 7.64844 8.32684 7.64844 7.03125C7.64844 5.73891 8.70766 4.67969 10 4.67969C11.2923 4.67969 12.3477 5.73891 12.3477 7.03125C12.3477 8.30793 11.3197 9.38281 10 9.38281Z"
                  fill="#F3A800"/>
              </svg>
              <a href="#" className="contact__link">место магазина</a></li>
            <li className="contact__item">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.799988 2.33338C0.799988 1.92672 0.961532 1.5367 1.24909 1.24915C1.53664 0.961593 1.92666 0.800049 2.33332 0.800049H4.84799C5.00883 0.800169 5.16556 0.850873 5.296 0.944985C5.42643 1.0391 5.52396 1.17185 5.57479 1.32445L6.72325 4.76908C6.78144 4.94414 6.77456 5.13431 6.70387 5.30471C6.63318 5.4751 6.50341 5.6143 6.33839 5.69674L4.60802 6.56308C5.4562 8.44029 6.95974 9.94381 8.83695 10.792L9.70327 9.06165C9.78575 8.89661 9.92495 8.76685 10.0953 8.69613C10.2657 8.62549 10.4559 8.61861 10.6309 8.67677L14.0756 9.82525C14.2283 9.87613 14.3612 9.97373 14.4553 10.1044C14.5494 10.2349 14.6 10.3918 14.6 10.5528V13.0667C14.6 13.4734 14.4385 13.8634 14.1509 14.1509C13.8633 14.4385 13.4733 14.6 13.0666 14.6H12.3C5.94892 14.6 0.799988 9.45109 0.799988 3.10005V2.33338Z"
                  stroke="#FFC94F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:74952335557" className="contact__link">+7 (495) 233 55 57</a></li>
            <li className="contact__item">
              <svg viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M14.5832 2.25004C14.5832 1.47087 13.9457 0.833374 13.1665 0.833374H1.83317C1.054 0.833374 0.416504 1.47087 0.416504 2.25004V10.75C0.416504 11.5292 1.054 12.1667 1.83317 12.1667H13.1665C13.9457 12.1667 14.5832 11.5292 14.5832 10.75V2.25004ZM13.1665 2.25003L7.49982 5.7917L1.83316 2.25003H13.1665ZM13.1665 10.75H1.83316V3.6667L7.49982 7.20836L13.1665 3.6667V10.75Z"
                  fill="#FFC94F"/>
              </svg>
              <a href="mailto:info@i-lights.ru" className="contact__link">info@i-lights.ru</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
