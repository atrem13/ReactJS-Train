import React from 'react';
class OnChangeForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:""
    }
  }
  OnChangeHandler = (event) => {
    this.setState({username : event.target.value});
  }
  render(){
    return(
      <div>
        <form>
            <h2>Hello {this.state.username}</h2>
            <input type="text" name="username" onChange={this.OnChangeHandler}/>
        </form>
      </div>
    )
  }
}
export default OnChangeForm;