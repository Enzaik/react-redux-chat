import React from 'react';

import classes from './Thread.css';

const thread = (props) => {

    let classesArray = [];
    classesArray.push(classes.Thread);
    if (props.selected) {
        classesArray.push(classes.Selected)
    }
    //console.log(props);
    
    return (
        <li className={classesArray.join(' ')} onClick={props.clicked}>{props.name}</li>
    );
}

export default thread;