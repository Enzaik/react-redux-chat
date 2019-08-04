import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Thread from '../../components/Thread/Thread';
import classes from './Threads.css';
import * as actions from '../../store/actions/index';

class Threads extends Component {

    componentDidMount() {
        console.log('threads');

        //  this.props.onSelectThread(0);
        //  this.props.onFetchMessages(0);
    }


    clickHandler = (name) => {
        this.props.history.push({
            pathname: "/messages",
            search: '?user=' + name
        })
        this.props.onSelectThread(name);
    }

    render() {
        console.log('this.props.thrds', this.props.thrds);
        const users = this.props.thrds.map(user => {
            return <Thread
                key={user}
                name={user}
                selected={this.props.selectedTh === user}
                clicked={() => this.clickHandler(user)} />

        })
        // const users = null;

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
        thrds: state.thread.threads,
        selectedTh: state.thread.selectedThread
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectThread: (idThread) => dispatch(actions.selectThread(idThread)),
        onFetchMessages: (threadName) => dispatch(actions.fetchMessages(threadName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Threads));