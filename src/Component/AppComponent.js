import React from 'react';
import Greet from './Greet';
import Class from './Class';
import Function from './Function';
import Constructor from './Constructor';
import Props from './Props';
import ModelCar from './ComponentInComponent';

class Component extends React.Component{
  render(){
    return(
      <ModelCar ComponentInComponent model="Avanza" year = "2002"/>
    )
  }
}
export default Component;