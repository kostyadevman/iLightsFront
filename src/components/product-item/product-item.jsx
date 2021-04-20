import React from 'react';

const ProducItem = () => {
  return (
    <li className="products-grid__item">
      <article className="product">
        <div className="product__teg">
          <span>Вт</span>
        </div>
        <a href="#" className="product__image">
          <img src="./img/card-img-2.jpg" alt="Светильник" />
        </a>
        <div className="product__content">
          <h3 className="product__title">
            <a href="#">Дизайнерский светильник изготавливаемый по проекту</a>
          </h3>
          <ul className="product__list text">
            <li className="product__item ">Длинна до 3 метров.</li>
            <li className="product__item">Углы поворота между секторами по проекту.</li>
            <li className="product__item">Мощность рассчитывается индивидуально.</li>
          </ul>
          <span className="product-price">41 500 ₽</span>
        </div>
        <div className="product__btns">
          <button className="btn-reset product__btn product__btn--more">Подробнее</button>
          <button className="btn-reset product__btn product__btn--plus" />
        </div>
      </article>
    </li>
  );
};

export default ProducItem;
