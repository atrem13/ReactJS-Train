import React from 'react';
class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand : this.props.brand
    }
  }
  render() {
    return(
    <p>mereknya adalah {this.state.brand}</p>
    )
  }
}


export default Car;