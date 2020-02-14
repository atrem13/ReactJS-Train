import React from 'react';

class StyleFromJSVariable extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    let myStyle = {
      fontWeight:"bold",
      color:"aqua",
      fontStyle:"italic"
    }
    return(
      <div>
        <h3 style={myStyle}>test style from js variable</h3>
      </div>
    )
  }
}
export default StyleFromJSVariable;