import React from 'react';
class HandleMuntipleInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:"",
      class:""
    }
  }
  OnSubmitHandle = (event) =>{
    event.preventDefault();
    alert("username = " + this.state.username + " class = " + this.state.class);
  }
  OnChangeHandle = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]:value
    });
  }
  render(){
    return(
      <div>
        <form onSubmit={this.OnSubmitHandle}>
          <h2>Hello {this.state.username} youre from class {this.state.class}</h2>
          <input type="text" name="username" onChange={this.OnChangeHandle}/>
          <input type="text" name="class" onChange={this.OnChangeHandle}/>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}
export default HandleMuntipleInput;