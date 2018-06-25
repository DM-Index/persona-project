import React from "react";
import axios from "axios";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
  }
  // we will use routes to fetch data dont worry about props or state in this component

  componentDidMount() {
    axios
      .get("/cart")
      .then(res => {
        console.log(res);
        this.setState({ cart: res.cart });
      })
      .catch();
  }

  // set state here or bring it in from product... which design is better?
  render() {
    const kart = this.state.cart.map((item, id) => {
      return (
        <div ClassName="kart-wrapper" key={id}>
          <h1>{this.state.cart}</h1>
          <h2>{item}</h2>
          <h3>{item}</h3>
          <h4>{kart}</h4>
        </div>
      );
    });
    // map here not in return avoid logic in return, display result
    return <div />;
  }
}
