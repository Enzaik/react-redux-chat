import React from 'react';

import classes from './Message.css'

const message = (props) => {

   let newClasses = [];
   newClasses.push(classes.Message);
   if(props.logged === props.sender){
      newClasses.push(classes.Mine)
   } else{
      newClasses.push(classes.Alien)
   }

   return (
   <div>
   <span className={newClasses.join(' ')}
   sender={props.sender}
   receiver={props.receiver}>{props.text}</span></div> 
   )
};

export default message;