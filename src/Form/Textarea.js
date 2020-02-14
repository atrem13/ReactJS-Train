import React from 'react';

class Textarea extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      desc:"contoh deskripsi"
    }
  }
  render(){
    return(
      <div>
        <form>
          <textarea value={this.state.desc}/>
        </form>
      </div>
    )
  }
}
export default Textarea;