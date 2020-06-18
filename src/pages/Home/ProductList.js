import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;
    console.log(products);
    if (products.length < 1) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

    return (
      <div>
        {products.results.map((product) => (
          <Product key={product.name} />
        ))}
      </div>
    );
  }
}

export default ProductList;
