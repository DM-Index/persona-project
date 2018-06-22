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
    console.log("button clicked", val);
    axios.post("/cart/addItem", { val }).then(res => {
      this.setState({ cart: res.cart });
    });
  }

  editItem(val) {
    console.log("button clicked", val);
    axios.put("/cart/editItem", { val }).then(res => {
      this.setState({ cart: res.cart });
    });
  }

  deleteItem(val) {
    console.log("button clicked", val);
    axios.post("/cart/addItem", { val }).then(res => {
      this.setState({ cart: res.cart });
    });
  }

  render() {
    const display = this.state.products.map((product, i) => {
      return (
        <div className="product-wrapper" key={i}>
          {product.id}
          <br />
          <br />
          {product.type}
          <br />
          <br />
          {product.price}
          <br />
          <br />
          <button onClick={() => this.addItem(product.id)}>Add to Cart</button>
          <br />
          <br />
        </div>
      );
    });
    return <div key={display.id}>{display}</div>;
  }
}
