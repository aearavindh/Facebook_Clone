import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import { SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import { Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
// import { Facebook } from '@material-ui/icons';


function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.brandeps.com/logo-download/F/Facebook-logo-vector-01.svg"
                alt = ""
                />
                {/* <Facebook fontSize="large" color="primary"/> */}
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__center">
                <div className="header__option 
                    header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={ user.photoURL } />
                    <h4>{ user.displayName }</h4>
                </div>
                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>
        </div>
    )
}

export default Header



