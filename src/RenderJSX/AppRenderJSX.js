import React from 'react';
const myElement = (
  <p>React is {5+5} times better with JSX</p>
);
class AppRenderJSX extends React.Component{
  render(){
    return (
      <div>{myElement}</div>
    )
  }
}
export default AppRenderJSX;
