import React from 'react';
class Car extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      brand: this.props.brand
    }
  }
  present(){
    return (
    <p>mereknya adalah {this.state.brand}</p>
    )
  }
  render(){
    return(
      <div>{this.present()}</div>  
    )
  }
  
}

export default Car;