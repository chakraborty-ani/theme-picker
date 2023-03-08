import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import '../styles/HeaderStyle.css';

const Header = () => {
    const style = useSelector(state => state.ThemeChangeReducer);
    const [homeActive, setHomeActive] = useState(false);
    const [routeActive, setRouteActive] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            setRouteActive(false);
            setHomeActive(true);
        }
        else if (location.pathname === '/theme-list') {
            setHomeActive(false);
            setRouteActive(true);
        }
    }, [location.pathname])
    return (
        <nav className='navbar' style={{ backgroundColor: `${style.backgroundColor}` }}>
            <motion.span
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 85 }}
                whileHover={{ textShadow: "0px 0px 8px rgb(211,211,211)" }}>
                <Link
                    className='navbar-brand'
                    to='/'
                    style={{ color: `${style.color}` }}>
                    ThemePicker
                </Link>
            </motion.span>
            <motion.ul className='navbar-menu'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.5 }}>
                <motion.li className='navbar-item'
                    whileHover={{ borderBottom: `1px solid ${style.color}` }}>
                    <Link
                        className={`navbar-link ${homeActive ? "active" : ""}`}
                        to='/'
                        style={{ color: `${style.color}` }}>
                        Home
                    </Link>
                </motion.li>
                <motion.li className='navbar-item'
                    whileHover={{ borderBottom: `1px solid ${style.color}` }}>
                    <Link
                        className={`navbar-link ${routeActive ? "active" : ""}`}
                        to='/theme-list'
                        style={{ color: `${style.color}` }}>
                        Themes
                    </Link>
                </motion.li>
            </motion.ul>


        </nav>
    )
}

export default Header