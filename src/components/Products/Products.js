import React from "react";
import axios from "axios";

import "./Products.css";

export default class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    axios
      .get("/products")
      .then(results => {
        this.setState({ products: results.data });
      })
      .catch(err => console.log(err));
  }

  // body params query to send data
  addItem(val) {
    console.log("button clicked", val);
    axios
      .post("/cart/addItem", { val })
      .then(res => {
        // this.setState({ cart: res.cart });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  // editItem(val) {
  //   console.log("button clicked", val);
  //   axios
  //     .put("/cart/edit", { val })
  //     .then(res => {
  //       this.setState({ cart: res.cart });
  //     })
  //     .catch(console.log("edit item error"));
  // }

  deleteItem(val) {
    console.log("button clicked", val);
    axios
      .post("/cart", { val })
      .then(res => {
        this.setState({ cart: res.cart });
      })
      .catch(err => console.log(err));
  }

  render() {
    const display = this.state.products.map((product, id) => {
      return (
        <div className="product-wrapper" key={id}>
          <div className="state-display">
            <div className="row-wrapper">
              <div className="column-wrapper">
                {product.id}
                <br />
                <br />
                {product.type}
                <br />
                <br />
                {product.price}
                <br />
                <br />
                <button onClick={() => this.addItem(product.id)}>
                  Add to Cart
                </button>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div key={display.id}>{display}</div>;
  }
}
