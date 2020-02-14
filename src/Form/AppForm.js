import React from 'react';
import OnChangeForm from './OnChangeForm';
import SubmitForm from './SubmitForm';
import HandleMultipleInput from './HandleMuntipleInput';
import ValidateWhenUserTyping from './ValidateWhenUserTyping';
import ValidateWhenUserSubmit from './ValidateWhenUserSubmit';
import AddErrorMessage from './AddErrorMessage';
import Textarea from './Textarea';
import Select from './Select';

class AppForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <Select/>
      </div>
    )
  }
}
export default AppForm;