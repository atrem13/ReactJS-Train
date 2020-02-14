import React from 'react';
class Car extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      model : this.props.model
    }
  }
  render(){
    return(
    <p>this is a car, and the model is {this.state.model}</p>
    )
  }
}
class ModelCar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      year : this.props.year
    }
  }
  render(){
    return(
      <div>
        <Car model = {this.props.model}/>. this car relase on {this.state.year}
      </div>
    
    )
  }
  
}
export default ModelCar;