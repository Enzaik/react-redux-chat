import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Messages.css';
import Message from '../../components/Message/Message';
import fire from '../../fire';
import * as actions from '../../store/actions/index';

class Messages extends Component {
    componentDidMount() {
        console.log(' messages componentDidMount', this.props);
        let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
        messagesRef.on('child_added', snapshot => {
            this.props.onUpdateMessage(this.props.user);
        })
    }

    render() {
        let messages = this.props.messages.map(message => (
            <Message
                logged={localStorage.getItem('user')}
                sender={message.idSender}
                receiver={message.idReceiver}
                text={message.text} />
        ))

        return (
            <section className={classes.Messages}>
                {messages}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.message.messages,
        user: state.thread.selectedThread
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateMessage: (user) => dispatch(actions.fetchMessages(user))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Messages));