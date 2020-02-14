import React from 'react';

class AddErrorMessage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:"",
      age:"",
      errMessage:""
    }
  }
  OnChangeHandle = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let err = "";

    if(name === "age"){
      if(value !== "" && !Number(value)){
        err = <strong>age must be number</strong>;
      }
    }
    this.setState({
      errMessage : err,
      [name]: value
    });
  }
  render(){
    let greet = ""
    if(this.state.username !== "" && this.state.age !== ""){
        greet = <h2>hello {this.state.username} -- your age {this.state.age}</h2>;
    }
    return(
      <div>
        {greet}
        <form>
          <input 
            type = "text"
            name = "username"
            placeholder = "username"
            onChange={this.OnChangeHandle}
          />
          <input 
            type = "text"
            name = "age"
            placeholder = "age"
            onChange={this.OnChangeHandle}
          />
        </form>
        {this.state.errMessage}
      </div>
    )
  }
}
export default AddErrorMessage;