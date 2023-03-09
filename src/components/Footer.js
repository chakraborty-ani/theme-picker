import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/FooterStyle.css';

const Footer = () => {
    const style = useSelector(state => state.ThemeChangeReducer);
    return (
        <>
            <hr style={{ border: `1px solid ${style.color}` }} />
            <div id='footer'
                style={{
                    backgroundColor: `${style.backgroundColor}`,
                    color: `${style.color}`
                }}>
                <p>Developed by Aniket Chakraborty (2023)</p>
            </div>
        </>
    )
}

export default Footer