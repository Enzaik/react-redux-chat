import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Chat</NavigationItem>
        <NavigationItem link="/users" >Users</NavigationItem>
        {!props.isAuthenticated
            ?
            <NavigationItem link="/auth">Auth</NavigationItem>
            :
            <NavigationItem link="/logout">Log out ( {localStorage.getItem('user')} )</NavigationItem>
        }
  </ul>
);

export default withRouter(navigationItems); 