import React from 'react';
class OnClick extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favColor:"blue"
    }
  }
  ChangeColor = () => {
    this.setState({favColor:"red"});
  }
  render(){
    return(
      <div>{this.state.favColor} <button onClick={this.ChangeColor}>Change</button></div>
    )
  }
}
export default OnClick;