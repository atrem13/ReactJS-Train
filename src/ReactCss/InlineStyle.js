import React from 'react';

class InlineStyle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <h2 style={{color:"red", fontStyle:"italic"}}>test inline style</h2>
      </div>
    )
  }
  
}
export default InlineStyle;