import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const isAuthenticated = useSelector((state) => state.auth.token !== null);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    };

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    };

    return (
        <Aux>
            <Toolbar
                isAuth={isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}
            />
            <SideDrawer
                isAuth={isAuthenticated}
                open={sideDrawerIsVisible}
                closed={sideDrawerClosedHandler}
            />
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    );
};

export default layout;
