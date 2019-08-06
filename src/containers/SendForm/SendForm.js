import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import SendForm from '../../components/UI/SendForm/SendForm';

class SendFormCont extends Component {

    state = {
        value: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            ...this.state,
            value: e.target.value
        })
    }

    send = (e) => {
        e.preventDefault();
        const newMessage = {
            id: '',
            idReceiver: this.props.selected,
            idSender: "me", //hardcode
            idThread: this.props.selected,
            text: this.state.value
        }
        this.props.onSendMessage(newMessage);
        this.setState({...this.state, value: ''})
    }

    render() {

        return (
            <SendForm
                submit={(e) => this.send(e)}
                value={this.state.value}
                changed={this.inputChangeHandler} />
        );
    };
};

const mapStateToProps = state => {
    return {
        messages: state.message.messages,
        selected: state.thread.selectedThread
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSendMessage: (value) => dispatch(actions.sendMessage(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendFormCont);