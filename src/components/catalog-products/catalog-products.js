import React from 'react';
import PropTypes from 'prop-types';
import ProductList from "../product-list/product-list";
import {PRODUCTS_COUNT} from "../../const";


const CatalogProducts = ({title}) => {
  return (
    <section className="products__section products__section--new">
      <h3 className="products__title">{title}</h3>
      <ProductList productsCount={PRODUCTS_COUNT} />
    </section>
  );
};

CatalogProducts.propTypes = {
  title: PropTypes.string.isRequired
};

export default CatalogProducts;
