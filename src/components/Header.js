import React from 'react';
import '../styles/header.css'
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from "../StateProvider";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {actionTypes} from "../reducer";
import firebase from "firebase";

const Header = () => {

    const [{user}, dispatch] = useStateValue();

    const logout = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch({
                    type: actionTypes.LOGOUT
                })

            }


        });
    }

    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    src={user?.photoURL}
                    alt={user?.displayName}
                    className='header__avatar'
                />
                <AccessTimeIcon/>
            </div>
            <div className="header__search">
                <SearchIcon/>
                <input
                    type="text"
                    placeholder='Search anything...'
                />
            </div>
            <div className="header__right">
                <HelpOutlineIcon/>
                <ExitToAppIcon onClick={logout}/>
            </div>
        </div>
    );
};

export default Header;
