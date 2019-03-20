import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ChatWindow from './ChatWindow/ChatWindow';
import UserName from './UserName/UserName';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/" component = { UserName } />
                        <Route exact path="/room/:RoomName" component = { ChatWindow } />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default App;