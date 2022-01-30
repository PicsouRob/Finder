import React, { useState, useEffect, useCallback } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import SocialMedia from './SocialMedia';

function MenuBurger() {
    const [isOpen, setIsOpen] = useState(false);
    const handleKeyPress = useCallback((e) => {
        e = e || window.event;

        if (e.key === 'Escape' || e.keyCode === 27) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, [handleKeyPress]);

    return (
        <div class="block md:hidden overflow-hidden">
            <Menu right
                isOpen={isOpen}
                styles={styles}
                customBurgerIcon={<div >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>}
                customCrossIcon={<div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>}
            >
                <NavLink to="/" id="home" className="menu-item" >Accueil</NavLink>
                <NavLink to="/about" id="about" className="menu-item" >À propos de nous</NavLink>
                <NavLink to="/api/job/find" id="search" className="menu-item"
                    state={{ jobValue: '', cityValue: 'Ville' }}
                >Parcourir</NavLink>
                <NavLink to="/contact" id="contact" className="menu-item">Contact</NavLink>
                <div style={{ marginTop: 80 }}>
                    <SocialMedia color="#000" />
                </div>
            </Menu>
        </div>
    );
}

var styles = {
    bmBurgerButton: {
        position: 'relative',
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px',
        margin: '15px 15px 0 0'
    },
    bmCross: {
        background: '#fff'
    },
    bmMenuWrap: {
        position: 'fixed',
        top: '0px',
    },
    bmMenu: {
        background: '#fff',
        padding: '2.5em 1em 0',
        fontSize: '1.2em',
        height: '100vh',
        overflow: 'hidden'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#000',
        padding: '0.8em',
        fontWeight: "600",
        paddingTop: 50
    },
    bmItem: {
        display: 'block',
        margin: '15px 0'
    },
    bmOverlay: {
        background: '#fff'
    }
}

export default MenuBurger;