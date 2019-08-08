import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

// import classes from './Users.css';
import User from '../../components/User/User';

// import * as actions from '../../store/actions/index';

class Users extends Component {

    render() {
        return (
            <div>
                <User name="lol"/>
                <User name="lol"/>
                <User name="lol"/>
            </div>
        )


    };
};

export default Users;