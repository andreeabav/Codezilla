import React, { useState } from 'react'
import MenuHeader from './components/MenuHeader';
import classes from '../style/header.module.css';
import Button from './../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={classes.ctnHeader}>
            <div className="container">
                <div className={`${classes.ctnGrid} ${isOpen ? classes.openedGrid : ''}`}>
                    <div className={classes.logoH}>
                        <img alt="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} />
                    </div>
                    <div className={classes.menuRight}>
                        <Button classes="menuToggle" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                        </Button>
                    </div>
                    <div className={`${classes.hideForMobile} ${isOpen ? classes.openedMenu : ''}`}>
                        <MenuHeader />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
