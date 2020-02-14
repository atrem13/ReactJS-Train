import React from 'react';
class ShouldComponentUpdate extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favColor:"red"
    }
  }
  shouldComponentUpdate(){
    return false;
  }
  changeColor = () => {
    this.setState({favColor:"blue"});
  }
  render(){
    return(
      <div>
        this is ShouldComponentUpdate, favColor is {this.state.favColor}. <br/>
        even if you click this button the value will not change <button onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}
export default ShouldComponentUpdate;