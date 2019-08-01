import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import User from '../../components/User/User';
import classes from './Users.css';

class Users extends Component {
    state = {
        users: [
            {
                idUser: 0,
                name: 'Whyred'
            },
            {
                idUser: 1,
                name: 'Rolex'
            },
            {
                idUser: 2,
                name: 'Lavender'
            },
        ],
        selectedUser: 0
    }

     clickHandler = (id, name) => {
        this.setState({selectedUser: id});
        this.props.history.push({
            pathname: "/messages",
            search: '?user=' + name
        })
        console.log(this.props);
        
    }

    render() {

        const users = this.state.users.map(user => {
            return <User 
            key={user.idUser}
            name={user.name} 
            selected={this.state.selectedUser === user.idUser} 
            clicked={() => this.clickHandler(user.idUser, user.name)}/>
        })

        return (
            <section className={classes.Users}>
                <ul>
                    {users}
                </ul>
            </section>
        )
    }

}



export default withRouter(Users);