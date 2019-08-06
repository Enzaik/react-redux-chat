import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Messages.css';
import Message from '../../components/Message/Message';

class Messages extends Component {
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (var param of query.entries()) {
            console.log(param);
        }
        //  this.props.onInitMessages('vendor');

    }

    render() {
        console.log('message props',this.props);
                let messages = this.props.messages.map(message => (
            <Message
                logged="me" //hardcode
                sender={message.idSender}
                receiver={message.idReceiver}
                text={message.text} />
        )

        )


        return (
            <section className={classes.Messages}>
                {messages}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.message.messages
    };
};


export default connect(mapStateToProps)(withRouter(Messages));