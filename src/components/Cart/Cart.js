import React from "react";
import axios from "axios";

export default class Cart extends React.Component {
  componentDidMount() {
    axios.get("/cart").then(res => {
      this.setState({cart: res.cart})
      
    })
  }

  render() {
    const kart = this.state.cart.map(item => {}
    // map here not in return avoid logic in return, display result 
    return (
      <div>
        {this.props.cart[0] &&
          this.props.cart.map(item => {
            return (
              <div>
                <h1>{item}</h1>
                <h2>{item}</h2>
                <h3>{item}</h3>
              </div>
            );
          })}
      </div>
    );
  }
}
