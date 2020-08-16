import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import {useStateValue} from "./StateProvider";
import TradingView from "./components/TradingView";

function App() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="app">
            <Router>
                {!user
                    ?
                    <Login/>
                    :
                    <>
                        <Header/>
                        <div className="app__body">
                            <Sidebar/>
                            <Switch>
                                <Route exact path="/">
                                    <TradingView/>
                                </Route>

                                <Route path="/room/:roomId">
                                    <Chat/>
                                </Route>

                                <Redirect to="/"/>
                            </Switch>
                        </div>
                    </>
                }

            </Router>
        </div>
    );
}

export default App;
