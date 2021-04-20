import React from 'react';
import PropTypes from 'prop-types';
import ProducItem from "../product-item/product-item";

const ProductList = ({productsCount}) => {
  return (
    <ul className="products-grid">
      {[...Array(productsCount).keys()].map((id) => (
        <ProducItem key={id}/>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  productsCount: PropTypes.number.isRequired
};

export default ProductList;
