import React from 'react';

import classes from './User.css';

const user = (props) => {

    let classesArray = [];
    classesArray.push(classes.User);
    if (props.selected) {
        classesArray.push(classes.Selected)
    }
    //console.log(props);
    
    return (
        <li className={classesArray.join(' ')} onClick={props.clicked}>{props.name}</li>
    );
}

export default user;