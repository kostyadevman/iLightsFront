import React from 'react';
import CatalogProducts from "../catalog-products/catalog-products";

const Main = () => {

  return (
    <main className="main main-catalog">
      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="index.html" className="breadcrumbs__link">Главная</a>
            </li>
            <li className="breadcrumbs__item">
              <a href="#" className="breadcrumbs__link">Каталог</a>
            </li>
          </ul>
        </div>
      </div>
      <section className="catalog">
        <div className="container catalog__container">
          <h2 className="title catalog__title">Каталог</h2>
          <div className="catalog-category scroll" data-simplebar id="catalog-category--scroll">
            <ul className="catalog-category__list">
              <li className="catalog-category__item catalog-category__item--active"><a href="#"
                className="catalog-category__link">Трековые
                светильники</a></li>
              <li className="catalog-category__item"><a href="#" className="catalog-category__link">Встраиваемые
                светильники</a>
              </li>
              <li className="catalog-category__item"><a href="#" className="catalog-category__link">Профильные
                светильники</a>
              </li>
              <li className="catalog-category__item"><a href="#" className="catalog-category__link">Фигурные
                светильники</a></li>
              <li className="catalog-category__item"><a href="#" className="catalog-category__link">Светильники
                Армстронг</a></li>
              <li className="catalog-category__item"><a href="#" className="catalog-category__link">Светильники
                Армстронг с
                равномерной засветкой</a></li>
            </ul>
          </div>
          <div className="catalog__content">
            <div className="filters">
              <div className="filters__heading">
                <h3 className="filters__title">Фильтр</h3>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path
                      d="M4.75519 6.41691C4.95945 6.71251 4.89839 6.4662 4.89839 12.3582C4.89839 12.8855 5.49994 13.1873 5.92392 12.8719C7.73561 11.506 8.09758 11.3877 8.09758 10.7488C8.09758 6.4551 8.04754 6.69656 8.24079 6.41691L11.1828 2.41235H1.81322L4.75519 6.41691Z"
                      fill="#FFC94F"/>
                    <path
                      d="M12.2943 0.326523C12.1891 0.125176 11.983 0 11.756 0H1.24033C0.75016 0 0.461748 0.552932 0.742924 0.954687C0.745234 0.958547 0.711008 0.911701 1.25378 1.65039H11.7425C12.2051 1.02088 12.5142 0.748896 12.2943 0.326523Z"
                      fill="#FFC94F"/>
                  </g>
                </svg>
              </div>
              <ul className="filter-price">
                <li className="filter-price__item">
                  <h3 className="filter-price__title">Мощность</h3>
                  <div className="filter-price__slider">
                  </div>
                </li>
                <li className="filter-price__item">
                  <h3 className="filter-price__title">Световой поток LED</h3>
                  <div className="filter-price__slider"></div>
                </li>
                <li className="filter-price__item">
                  <h3 className="filter-price__title">Угол рассеивания</h3>
                  <div className="filter-price__slider"></div>
                </li>
                <li className="filter-price__item">
                  <h3 className="filter-price__title">Минимальная цена</h3>
                  <div className="filter-price__slider"></div>
                </li>
              </ul>
              <div className="filters__btns">
                <button className="btn btn-reset btn__clear filters__btn-clear">Сбросить</button>
                <button className="btn btn-reset btn__main filters__btn-main">Применить</button>
              </div>
            </div>
            <div className="products">
              <CatalogProducts title={`Новинки`}/>
              <CatalogProducts title={`Весь каталог`} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
