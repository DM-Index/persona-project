import React from "react";
import axios from "axios";

export default class Products extends React.Component {
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
    const Display = this.state.products.map((Display, id) => {
      // console.log(product.type);
      // return (
      //   <span className="product-wrapper">
      //     <br />
      //     {product.type},
      //     <br />
      //     {product.price},
      //   </span>
      // );
      <Display
        key={Display.id}
        Category={Display.type}
        price={Display.price}
      />;
    });
    //     return (
    //       <div key={display.id}>
    //         <h1> Category: {display} </h1>
    //         <br />
    //         <p> Price: {display} </p>
    //         <br />
    //       </div>
    //     );
    //   }
    // }

    return <div> {Display} </div>;
  }
}
