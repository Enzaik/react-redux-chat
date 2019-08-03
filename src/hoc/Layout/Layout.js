import React, { Component } from 'react';

import Messages from '../../containers/Messages/Messages';
import Threads from '../../containers/Threads/Threads';
import SendForm from '../../containers/SendForm/SendForm';
import Toolbar from '../../components/Toolbar/Toolbar';

class Layout extends Component {
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

export default Layout;