import React from 'react';
class SendProps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand : this.props.brand
    }
  }
  render(){
    return(
    <p>hi im example of props in component. the props name is brand and the value is {this.props.brand}</p>
    )
  }
}
export default SendProps;