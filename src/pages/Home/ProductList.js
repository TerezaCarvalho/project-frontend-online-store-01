import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    const { products, addToCart } = this.props;
    if (products.length < 1) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

    return (
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    );
  }
}

export default ProductList;
