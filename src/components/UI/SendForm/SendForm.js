import React, { Component } from 'react';

import classes from './SendForm.css'

class SendForm extends Component {

 

  render() {
    return (
      <form className={classes.SendForm} onSubmit={this.props.submit}>
        <input 
        onChange={this.props.changed}
        value={this.props.value} type="text" />
        <button>Submit</button>
      </form>
    )
  }

}

export default SendForm;