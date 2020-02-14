import React from 'react';
import CreateState from './CreateState';
import ChangeState from './ChangeState';

class AppState extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    return(
      <ChangeState/>
    )
  }
}
export default AppState;