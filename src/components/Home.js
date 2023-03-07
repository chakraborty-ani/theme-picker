import React from 'react';
import { useFormik } from 'formik';
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { otherTheme } from '../redux/actions/ThemesAction';
import { setPrimaryColor, setSecondaryColor, setThemeName } from '../redux/actions/ColorsAction';
import { addTheme } from '../redux/actions/ThemesListAction';

const Home = () => {

    const dispatch = useDispatch();
    const themeProperties = useSelector(state => state.ColorChangeReducer);
    const style = useSelector(state => state.ThemeChangeReducer);

    const INITIAL_VALUES = {
        themeName: themeProperties.themeName,
        primaryHexCode: themeProperties.primaryColor,
        secondaryHexCode: themeProperties.secondaryColor
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: INITIAL_VALUES,
        onSubmit: (values) => {
            // console.log(values);
            let customThemes = JSON.parse(localStorage.getItem("customThemes"));
            customThemes.push(values);
            localStorage.setItem("customThemes", JSON.stringify(customThemes));
            dispatch(otherTheme(customThemes.length - 1));
            dispatch(addTheme(values))
        }
    });

    const handlePrimaryColorChange = (color) => {
        dispatch(setThemeName(formik.values.themeName));
        dispatch(setPrimaryColor(color))
    }

    const handleSecondaryColorChange = (color) => {
        dispatch(setSecondaryColor(color))
    }

    return (
        <div style={style}>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor='themeNameInput'>Theme Name </label>
                    <input
                        id='themeNameInput'
                        name='themeName'
                        type='text'
                        value={formik.values.themeName}
                        onChange={formik.handleChange}
                    /><br />
                    <label htmlFor='primaryHexCodeInput'>Primary Color </label>
                    <input
                        id='primaryHexCodeInput'
                        name='primaryHexCode'
                        type='text'
                        value={formik.values.primaryHexCode}
                        onChange={formik.handleChange}
                    />
                    <SketchPicker
                        color={formik.values.primaryHexCode}
                        onChange={(color) => handlePrimaryColorChange(color.hex)}
                    /><br />
                    <label htmlFor='secondaryHexCodeInput'>Secondary Color </label>
                    <input
                        id='primaryHexCodeInput'
                        name='primaryHexCode'
                        type='text'
                        value={formik.values.secondaryHexCode}
                        onChange={formik.handleChange}
                    />
                    <SketchPicker
                        color={formik.values.secondaryHexCode}
                        onChange={(color) => handleSecondaryColorChange(color.hex)}
                    /><br /><br />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Home