import React from 'react';

import classes from './Message.css'

const message = (props) => (
   <p className={classes.Message}
   sender={props.sender}
   receiver={props.receiver}>{props.text}</p>
);

export default message;