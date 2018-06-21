import React from "react";
import axios from "axios";

export default class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios.get("/products").then(results => {
      console.log("axios firing", results.data);
      this.setState({ products: results.data });
    });
  }

  render() {
    return <div> Product Placeholder v2 </div>;
  }
}
