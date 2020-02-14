import React from 'react';
class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  hello = () =>{
    return (
      <p>hello world</p>
    );
  }
  render(){
    return(
      <div>
        {this.hello()}
      </div>
    )
  }
}

export default Car;