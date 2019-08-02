import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Messages.css'
import * as actions from '../../store/actions/index';
import Message from '../../components/Message/Message';

class Messages extends Component {
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (var param of query.entries()) {
            console.log(param);
       }
     //  this.props.onInitMessages('vendor');

    }

    render() {
        // console.log('messages' ,this.props.messages);
        // let messages = this.props.messages.map(message => (
        //     <Message text={message.text}/>
        // )

        // )
        
        return (
            <section className={classes.Messages}>
           <Message />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
      //  messages: state.message.messages
    };
};

const mapDispatchToProps = dispatch => {
    return {
      //  onInitMessages: (user) => dispatch(actions.fetchMessages(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Messages));