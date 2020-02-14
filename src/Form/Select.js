import React from 'react';

class Select extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      myCar : "Volvo"
    }
  }
  render(){
    return(
      <div>
        <select value={this.state.myCar}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </div>
    )
  }
}
export default Select;