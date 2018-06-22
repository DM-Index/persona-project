import React from "react";
import axios from "axios";

export default class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: []
    };
  }
  componentDidMount() {
    axios.get("/products").then(results => {
      console.log("axios firing", results.data);
      this.setState({ products: results.data });
    });
  }

  addHandler(val) {}

  render() {
    const display = this.state.products.map((product, id) => {
      console.log(product.type);
      return (
        <div ClassName="product-wrapper">
          {product.id}
          {product.type}
          {product.price}
          <button>Add to Cart</button>
        </div>
      );
    });
    return <div key={display.id}>{display}</div>;
  }
}
