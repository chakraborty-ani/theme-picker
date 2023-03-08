import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, lightTheme, otherTheme, natureTheme, oceanTheme } from '../redux/actions/ThemesAction';
import { motion } from 'framer-motion';
import '../styles/ThemeList.css';

const containerVariants = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 2, delay: 0.5 }
    }
}

const ThemeList = () => {

    const dispatch = useDispatch();
    const style = useSelector(state => state.ThemeChangeReducer);
    const themes = useSelector(state => state.AddThemeReducer);

    return (
        <div className='container' id='table-container' style={style}>
            <motion.table className='table'
                variants={containerVariants}
                initial="start"
                animate="end">
                <thead >
                    <tr className='row'>
                        <th className='cell cell-head cell-name'>Name</th>
                        <th className='cell cell-head'>Primary Color</th>
                        <th className='cell cell-head'>Secondary Color</th>
                        <th className='cell cell-head'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='row'>
                        <td className='cell cell-name'>Light</td>
                        <td className='cell' style={{ backgroundColor: '#f5f5fa', color: '#1f1717' }}>#f5f5fa</td>
                        <td className='cell' style={{ backgroundColor: '#1f1717', color: '#f5f5fa' }}>#1f1717</td>
                        <td className='cell'>
                            <button onClick={() => dispatch(lightTheme())}
                                className='apply-btn'
                                style={{
                                    backgroundColor: `${style.color}`,
                                    color: `${style.backgroundColor}`,
                                    border: `1px solid ${style.color}`
                                }}>
                                Apply
                            </button>
                        </td>
                    </tr>
                    <tr className='row'>
                        <td className='cell cell-name'>Dark</td>
                        <td className='cell' style={{ backgroundColor: '#1f1717', color: '#f5f5fa' }}>#1f1717</td>
                        <td className='cell' style={{ backgroundColor: '#f5f5fa', color: '#1f1717' }}>#f5f5fa</td>
                        <td className='cell'>
                            <button onClick={() => dispatch(darkTheme())}
                                className='apply-btn'
                                style={{
                                    backgroundColor: `${style.color}`,
                                    color: `${style.backgroundColor}`,
                                    border: `1px solid ${style.color}`
                                }}>
                                Apply
                            </button>
                        </td>
                    </tr>
                    <tr className='row'>
                        <td className='cell cell-name'>Nature</td>
                        <td className='cell' style={{ backgroundColor: '#498553', color: '#d7eadd' }}>#498553</td>
                        <td className='cell' style={{ backgroundColor: '#d7eadd', color: '#498553' }}>#d7eadd</td>
                        <td className='cell'>
                            <button onClick={() => dispatch(natureTheme())}
                                className='apply-btn'
                                style={{
                                    backgroundColor: `${style.color}`,
                                    color: `${style.backgroundColor}`,
                                    border: `1px solid ${style.color}`
                                }}>
                                Apply
                            </button>
                        </td>
                    </tr>
                    <tr className='row'>
                        <td className='cell cell-name'>Ocean</td>
                        <td className='cell' style={{ backgroundColor: '#1b65a7', color: '#f2f4f5' }}>#1b65a7</td>
                        <td className='cell' style={{ backgroundColor: '#f2f4f5', color: '#1b65a7' }}>#f2f4f5</td>
                        <td className='cell'>
                            <button onClick={() => dispatch(oceanTheme())}
                                className='apply-btn'
                                style={{
                                    backgroundColor: `${style.color}`,
                                    color: `${style.backgroundColor}`,
                                    border: `1px solid ${style.color}`
                                }}>
                                Apply
                            </button>
                        </td>
                    </tr>
                    {themes.map((theme, id) => {
                        return (
                            <tr key={id} className='row'>
                                <td className='cell cell-name'>{theme.name}</td>
                                <td className='cell' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>{theme.backgroundColor}</td>
                                <td className='cell' style={{ backgroundColor: theme.color, color: theme.backgroundColor }}>{theme.color}</td>
                                <td className='cell'>
                                    <button onClick={() => dispatch(otherTheme(id))}
                                        className='apply-btn'
                                        style={{
                                            backgroundColor: `${style.color}`,
                                            color: `${style.backgroundColor}`,
                                            border: `1px solid ${style.color}`
                                        }}>
                                        Apply
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </motion.table>
        </div>
    )
}

export default ThemeList