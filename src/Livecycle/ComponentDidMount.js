import React from 'react';
class ComponentDidMount extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      favColor:"red",
      condition:1
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({condition:!(this.state.condition)})
      if(this.state.condition){
        this.setState({favColor:"red"});
      }else{
        this.setState({favColor:"Aqua"});
      }
    }, 10000);
  }
  render(){
    return(
    <div>hei this is ComponentDidMount, favColor will change later on. FavColor now is {this.state.favColor}</div>
    )
  }
  
}
export default ComponentDidMount;