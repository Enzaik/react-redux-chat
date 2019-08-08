import React, { Component } from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './containers/Auth/Auth';
import Messages from './containers/Messages/Messages';
import Threads from './containers/Threads/Threads';
import Logout from './containers/Auth/Logout/Logout';
import SubmitForm from './containers/SendForm/SendForm';
import './App.css';
import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }



  render() {
    console.log(this.props);
    

    let routes = (
      <div>
        <Route path="/auth" render={Auth} />
        <Redirect to="/auth" />
      </div>
    )

    if (this.props.isAuthenticated) {
      routes = (<div>
        <Route path="/auth" render={Auth} />
        <Route path="/messages" component={Threads} />
        <Route path="/messages" component={Messages} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={Threads} />
        <Route path="/" exact component={Messages} />
        <Route path="/"  component={SubmitForm} />
      </div>)
    }

    return (
      <div>
        <Layout isAuthenticated={this.props.isAuthenticated}>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('app token', state.auth.token);

  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

