import React from 'react';
class ValidateWhenUserTyping extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      age : ""
    }
  }
  OnSubmitHandle = (event) => {
    if(!Number(this.state.age)){
      alert("age must be number");
    }
  }
  OnChangeHandle = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if(name === "age"){
      if(!Number(name)){
        alert("age must be number");
      }
    }
    this.setState({[name]:value});
  }
  render(){
    return(
      <div>
        <form onSubmit={this.OnSubmitHandle}>
          <h2>Hello {this.state.username} youre from class {this.state.class}</h2>
          <input type="text" name="username" onChange={this.OnChangeHandle}/>
          <input type="text" name="age" onChange={this.OnChangeHandle}/>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
  
}
export default ValidateWhenUserTyping;