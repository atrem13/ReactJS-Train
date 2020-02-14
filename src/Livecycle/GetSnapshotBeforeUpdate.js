import React from 'react';
class GetSnapshotBeforeUpdate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      favColor:"red"
    }
  }
  
  componentDidMount(){
    setTimeout(()=>{
      this.setState({ 
        favColor:"aqua"
       });
    }, 10000)
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    document.getElementById("div1").innerHTML = "before update the value of favColor is " + prevState.favColor;
  }

  componentDidUpdate(){
    document.getElementById("div2").innerHTML = "after update the value of favColor is " + this.state.favColor;
  }
  
  render(){
    return(
      <div>
        at first the value of favColor is {this.state.favColor}
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    )
  }

}
export default GetSnapshotBeforeUpdate;