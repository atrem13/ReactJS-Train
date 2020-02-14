import React from 'react';
import InlineStyle from './InlineStyle';
import  StyleFromJSVariable from './StyleFromJSVariable';
import useModuleCss from './useModuleCss';

class AppReactCss extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <useModuleCss/>
      </div>
    )
  }
  
}
export default AppReactCss;