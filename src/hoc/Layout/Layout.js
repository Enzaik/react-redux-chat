import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux'
import * as actions from '../../store/actions/index';
import Messages from '../../containers/Messages/Messages';
import Threads from '../../containers/Threads/Threads';
import SendForm from '../../containers/SendForm/SendForm';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    componentDidMount() {
        this.props.onInit('vendor'); //hardcode
        console.log('layout');
    }



    render() {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <div className="main">
                    <Threads /> 
                    <Messages />
                    <SendForm />
                </div>
            </Aux>
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