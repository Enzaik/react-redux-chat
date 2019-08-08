import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Chat</NavigationItem>
        {console.log('isAuthenticated', props.isAuthenticated)}
        {!props.isAuthenticated
            ?
            <NavigationItem link="/auth">Auth</NavigationItem>
            :
            <NavigationItem link="/logout">Log out</NavigationItem>
        }

    </ul>
);

export default withRouter(navigationItems); 