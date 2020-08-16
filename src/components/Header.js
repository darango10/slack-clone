import React from 'react';
import '../styles/header.css'
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from "../StateProvider";

const Header = () => {

    const [{user}, dispatch] = useStateValue();

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
            </div>
        </div>
    );
};

export default Header;
