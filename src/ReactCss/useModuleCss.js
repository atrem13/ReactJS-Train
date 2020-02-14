import React from 'react';
import myStyle from './style.module.css';

class useModuleCss extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <h3 className={myStyle.test}>test style from module css</h3>
      </div>
    )
  }
}
export default useModuleCss;