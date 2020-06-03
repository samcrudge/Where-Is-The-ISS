import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import NotFound from "./Components/NotFound/NotFound";
import ISS from "./Components/ISS/ISS";
import MapIss from "./Components/ISS/DisplayIss/Maptest/Maptest";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/map">maps</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={ ISS }/>
                        <Route exact path="/map" component={ MapIss }/>
                        <Route component={ NotFound }/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <Routing />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
