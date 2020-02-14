import React from 'react';
class Props extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favColor : this.props.favColor
    }
  }
  render(){
    return(
    <p>hi im props, here some of our props of favColor is {this.props.favColor}</p>
    )
  }
}
export default Props;