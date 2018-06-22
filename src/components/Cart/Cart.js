import React from "react";
import axios from "axios";

export default class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    axios.get("/cart").then(res => {
      this.setState({ cart: res.cart });
    });
  }
  // set state here or bring it in from product... which design is better?
  render() {
    // const kart = this.state.cart.map(item => {
    //   return (
    //     <div ClassName="kart-wrapper">
    //       <h1>{item}</h1>
    //       <h2>{item}</h2>
    //       <h3>{item}</h3>
    //     </div>
    //   );
    // });
    // map here not in return avoid logic in return, display result
    return <div>Cart Placeholder</div>;
  }
}

// set state here or bring it in from product... which design is better?
// render() {
// const kart = this.state.cart.map(item => {
//   return (
//     <div ClassName="kart-wrapper">
//       <h1>{item}</h1>
//       <h2>{item}</h2>
//       <h3>{item}</h3>
//     </div>
//   );
// });
// map here not in return avoid logic in return, display result
//   return <div />;
// }
// }
