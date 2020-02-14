import React from 'react';

class ChangeState extends React.Component{
  constructor(props) {
    super(props);
    // let color = 1;
    this.state = {
      Car:{
        CarModel:"Ford",
        CarColor:"Blue",
        CarTubles:4
      }
    }
  }
  ChangeCarColor = () => {
    this.color = !(this.color);
    let cc = "";
    if(this.color){
      cc = "Red";
    }else{
      cc = "Blue";
    }
    this.setState({
      Car:{
        ...this.state.Car, 
          CarColor : cc
      }
    });
  }
  render(){
    return(
      <div>
        {this.state.Car.CarColor}<br/><button onClick={this.ChangeCarColor}>Change Color</button>
      </div>
    )
  }
  
}
export default ChangeState