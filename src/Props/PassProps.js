import React from 'react';
class GetProps extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      brand : this.props.brand
    }
  }
  render(){
    return(
    <p>im get props from other component class. the props name is brand and the value is {this.state.brand}</p>
    )
  }
  
}
class PassProps extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <GetProps brand = "Ferrary"/>
      </div>
    )
  }
}
export default PassProps;