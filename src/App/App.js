import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import Pay  from '../Pay/Pay';
import Rav  from '../Pay/Rav';


class App extends React.Component {
    render() {
        return (
                        <Router>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/pay" component={Pay} />
                                <Route path="/ravepay" component={Rav} />
                            </div>
                        </Router>
        );
    }
}

export { App }; 