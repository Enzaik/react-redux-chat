import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Thread from '../../components/Thread/Thread';
import classes from './Threads.css';
import * as actions from '../../store/actions/index';

class Threads extends Component {

    componentDidMount() {
        // this.props.onInitThreads();
    }

    clickHandler = (name) => {
        // this.setState({ selectedUser: id });
        this.props.history.push({
            pathname: "/messages",
            search: '?user=' + name
        })

        this.props.onSelectThread(name);
        this.props.onUpdateMessages(name);
        console.log('name', name);

    }

    render() {
        console.log('usersss', this.props.thrds);
        const users = this.props.thrds.map(user => {
            return <Thread
                name={user}
                selected={this.props.selectedTh === user}
                clicked={() => this.clickHandler(user)} />
        })

        return (
            <section className={classes.Threads}>
                <ul>
                    {users}

                </ul>
            </section>
        )
    }

}

const mapStateToProps = state => {
    return {
        thrds: state.message.threads,
        selectedTh: state.thread.selectedThread
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitThreads: () => dispatch(actions.fetchThreads()),
        onSelectThread: (user) => dispatch(actions.selectThread(user)),
        onUpdateMessages: (user) => dispatch(actions.fetchMessages(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Threads));