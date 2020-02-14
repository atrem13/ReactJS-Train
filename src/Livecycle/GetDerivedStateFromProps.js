import React from 'react';
class GetDerivedStateFromProps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favColor: "Red"
    }
  }
  static getDerivedStateFromProps(props, state){
    return {favColor: props.favColor};
  }
  render(){
    return(
    <div>Hello this is GetDerivedStateFromProps, FavColor before is red but now it is {this.state.favColor}</div>
    )
  }
}
export default GetDerivedStateFromProps;