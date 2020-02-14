import React from 'react';
class Constructor extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      favColor: "Aqua"
    }
  }
  render(){
    return(
    <div>Hello this is Constructor, favColor = {this.state.favColor}</div>
    )
  }
  
}
export default Constructor;