import React from 'react';
class CreateState extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      brand:"Ford"
    }
  }
  render(){
    return(
      <div>
        i have a {this.state.brand}
      </div>
    )
  }
}
export default CreateState;