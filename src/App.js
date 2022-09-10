import React, {Component} from 'react';
import './App.css';
import Main from "./components/main/main"
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Items from "./components/items/items";
import "./components/styles.css";


class App extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/items" component={Items}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
