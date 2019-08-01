import React, { Component } from 'react';

import Messages from '../../containers/Messages/Messages';
import Users from '../../containers/Users/Users';
import Toolbar from '../../components/Toolbar/Toolbar';

class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <div className="main">
                    <Users />
                    <Messages />
                </div>
            </div>
        )
    }
}

export default Layout;