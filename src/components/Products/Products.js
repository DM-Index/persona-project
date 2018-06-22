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

  render() {
    const display = this.state.products.map((product, id) => {
      console.log(product.type);
      return (
        <div className="product-wrapper">
          {product.id}
          {product.type}
          {product.price}
        </div>
      );
    });
    return (
      <div key={display.id}>
        <h1> Category: {display} </h1>
        <br />
        <p> Price: {display} </p>
        <br />
        <button OnClick={this.state.cart} />
      </div>
    );
  }
}
