import React from 'react';
class ObjectProps extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      carInfo : {
                  name:this.props.carInfo.name,
                  model:this.props.carInfo.model
                }
    }
  }
  render(){
    return(
      <div>
        <p>hi this is example of object props, object name is carInfo and have value of name and model</p>
        <p>name: {this.state.carInfo.name}</p>
        <p>model: {this.props.carInfo.model}</p>
      </div>
      
    )
  }
  
}

export default ObjectProps;