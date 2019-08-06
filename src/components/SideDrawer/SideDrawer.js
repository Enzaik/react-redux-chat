import React, { Component } from 'react';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Thread from '../Thread/Thread';
import * as actions from '../../store/actions/index';
import classes from './SideDrawer.css';
import Backdrop from '../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux/Aux';

class SideDrawer extends Component {
    clickHandler = (name) => {
        this.props.history.push({
            pathname: "/messages",
            search: '?user=' + name
        })
        this.props.onSelectThread(name);
        this.props.onFetchMessages(name, this.props.thrds.indexOf(name));
        
    }



    render() {
        let attachedClasses = [classes.SideDrawer, classes.Close];
        if (this.props.open) {
            attachedClasses = [classes.SideDrawer, classes.Open];
        }

        const users = this.props.thrds.map(user => {
            return <Thread
                key={user}
                name={user}
                selected={this.props.selectedTh === user}
                clicked={() => this.clickHandler(user)} />

        })

        return (
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed} />
                <div className={attachedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        {users} 
                    </nav>
                </div>
            </Aux>
        );
    }


};

const mapStateToProps = state => {
    return {
        thrds: state.thread.threads,
        selectedTh: state.thread.selectedThread
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectThread: (idThread) => dispatch(actions.selectThread(idThread)),
        onFetchMessages: (threadName, index) => dispatch(actions.fetchMessages(threadName, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideDrawer));