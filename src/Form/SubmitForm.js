import React from 'react';
class SubmitForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username : ""
    }
  }
  OnSubmitHandler = (event) =>{
    event.preventDefault();
    alert("youre submiting username = " + this.state.username);
  }
  OnChangeHandler = (event) =>{
    this.setState({
      username: event.target.value
    });
  }
  render(){
    return(
      <div>
        <form onSubmit={this.OnSubmitHandler}>
          <h2>Hello {this.state.username}</h2>
          <input name="username" type="text" onChange={this.OnChangeHandler} />
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}
export default SubmitForm;