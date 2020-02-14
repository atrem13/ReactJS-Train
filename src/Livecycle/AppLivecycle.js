import React from 'react';
import Constructor from './Constructor';
import GetDerivedStateFromProps from './GetDerivedStateFromProps';
import Render from './Render';
import ComponentDidMount from './ComponentDidMount';
import ShouldComponentUpdate from './ShouldComponentUpdate';
import GetSnapshotBeforeUpdate from './GetSnapshotBeforeUpdate';
import ComponentDidUpdate from './ComponentDidUpdate';
import ComponentWillUnmount from './ComponentWillUnmount';

class AppLivecycle extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <ComponentWillUnmount />
      </div>
    )
  }
}
export default AppLivecycle;