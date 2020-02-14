import React from 'react';
class PassParameterOnEvent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  ClickMe = (a) => {
    alert(a);
  }
  render(){
    return(
      <div>
        click me <button onClick={()=>this.ClickMe("shit")}>here</button>
      </div>
    )
  }
  
}
export default PassParameterOnEvent;