import React from 'react';
import Navigation from '../CommonComponents/Navigation/Navigation'
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <Navigation />
        </nav>
    );
};

export default sideDrawer;