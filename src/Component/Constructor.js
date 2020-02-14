import React from 'react';
class Constructor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favColor:"blue"
    }
  }
  render(){
    return(
    <p>hi im constructor example. here some statement in constructor. favColor is {this.state.favColor}</p> 
    )
  }
}

export default Constructor;