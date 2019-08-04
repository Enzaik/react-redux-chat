import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';
import Messages from '../../containers/Messages/Messages';
import Threads from '../../containers/Threads/Threads';
import SendForm from '../../containers/SendForm/SendForm';
import Toolbar from '../../components/Toolbar/Toolbar';

class Layout extends Component {

componentDidMount() {
    this.props.onInit('vendor'); //hardcode
    console.log('layout');
}

    render() {
        return (
            <div>
                <Toolbar />
                <div className="main">
                    <Threads />
                    <Messages />
                    <SendForm />

                </div>
            </div>
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
        onInit: (user) => dispatch(actions.fetchThreads(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);