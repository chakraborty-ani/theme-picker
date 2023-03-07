import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, lightTheme, otherTheme } from '../redux/actions/ThemesAction';

const ThemeList = () => {

    const dispatch = useDispatch();
    const style = useSelector(state => state.ThemeChangeReducer);
    const themes = useSelector(state => state.AddThemeReducer);
    // console.log(themes);

    return (
        <div style={style}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Primary Color</th>
                        <th>Secondary Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Light</td>
                        <td>#fff</td>
                        <td>#000</td>
                        <td><button onClick={() => dispatch(lightTheme())}>Apply</button></td>
                    </tr>
                    <tr>
                        <td>Dark</td>
                        <td>#000</td>
                        <td>#fff</td>
                        <td><button onClick={() => dispatch(darkTheme())}>Apply</button></td>
                    </tr>
                    {themes.map((theme, id) => {
                        return (
                            <tr key={id}>
                                <td>{theme.name}</td>
                                <td>{theme.backgroundColor}</td>
                                <td>{theme.color}</td>
                                <td><button onClick={() => dispatch(otherTheme(id))}>Apply</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ThemeList