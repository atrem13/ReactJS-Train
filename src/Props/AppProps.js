import React from 'react';
import SendProps from './SendProps';
import PassProps from './PassProps';
import ObjectProps from './ObjectProps';

class AppProps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    const carInfo = {name:"Ford", model:"Mustang"}
    return(
      <div>
        <ObjectProps carInfo = {carInfo}/>
      </div>
    )
  }
}
export default AppProps;