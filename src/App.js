import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import {useStateValue} from "./StateProvider";
import TradingView from "./components/TradingView";
import firebase from "firebase";
import {actionTypes} from "./reducer";

function App() {
    const [{isLoggedIn}, dispatch] = useStateValue();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch({
                    type: actionTypes.SET_USER,
                    payload: user
                })

            }


        });
    }, [dispatch])

    return (
        <div className="app">
            <Router>
                {!isLoggedIn
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
