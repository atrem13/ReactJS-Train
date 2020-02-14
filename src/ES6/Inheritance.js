import React from 'react';
class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     brand : this.props.brand 
    }
  }
  present(){
    return(
    <p>ini dari kelas induk. dan warisannya {this.state.brand}</p>
    )
  }
}

class Model extends Car{
  constructor(props) {
    super(props);
    this.state = {
      brand : "Thunder"
    }
  }
  render(){
    return(
      <div>
        {this.present() }
      </div>
    )
  }
  
}
export default Model;