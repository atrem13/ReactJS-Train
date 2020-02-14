import React from 'react';
import {myElement} from './tryPrintVariableInRootDiv';
class Render extends React.Component{
  render(){
    return(
      <div>
        {myElement}
      </div>
    )
  }
}
export default Render;