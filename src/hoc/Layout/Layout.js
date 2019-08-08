import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import classes from './Layout.css';
import Aux from '../Aux/Aux'

import * as actions from '../../store/actions/index';

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
        const query = new URLSearchParams(this.props.location.search);
        console.log('query', this.props.location.search === "");
        if (this.props.location.search !== "") {
            console.log('rendering params');
            for (var param of query.entries()) {
                this.props.onInit(param[1]);
                this.props.history.push(this.props.location.pathname + this.props.location.search)
            }
        } else {
            console.log('rendering vendor');
            this.props.onInit('vendor'); //hardcode
        }
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
                <main className={classes.Content}>
                    {this.props.children}
                </main>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));