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
  // body params query to send data
  addItem(val) {
    console.log("button clicked", val)
    axios.post("/cart/addItem", { val }).then(res => {
      this.setState({ cart: res.cart });
    });
  }

  render() {
    const display = this.state.products.map((product, i) => {
      console.log(product.type);
      return (
        <div ClassName="product-wrapper" key={i}>
          {product.id}
          {product.type}
          {product.price}
          <button onClick={() => this.addItem(product.id)}>Add to Cart</button>
        </div>
      );
    });
    return <div key={display.id}>{display}</div>;
  }
}
