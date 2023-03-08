import React from 'react';
import { useFormik } from 'formik';
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { otherTheme } from '../redux/actions/ThemesAction';
import { setPrimaryColor, setSecondaryColor, setThemeName } from '../redux/actions/ColorsAction';
import { addTheme } from '../redux/actions/ThemesListAction';
import '../styles/Home.css';

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
        <div className='container' style={style}>
            <motion.div className='form-box'
                style={{ ...style, border: `1px solid ${style.color}` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 2 }}>
                <h2 id='form-heading'>Enter theme details</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor='themeNameInput'>Theme Name </label>
                        <input
                            id='themeNameInput'
                            name='themeName'
                            type='text'
                            value={formik.values.themeName}
                            onChange={formik.handleChange}
                            style={{ border: `1px solid ${style.color}` }}
                        />
                        <label htmlFor='primaryHexCodeInput'>Primary Color </label>
                        <div className='color-input'>
                            <input
                                id='primaryHexCodeInput'
                                name='primaryHexCode'
                                type='text'
                                value={formik.values.primaryHexCode}
                                onChange={formik.handleChange}
                                style={{ border: `1px solid ${style.color}` }}
                            />
                            <button className='choose-btn'
                                style={{ backgroundColor: `${style.color}`, color: `${style.backgroundColor}` }}
                            >
                                Choose Color
                            </button>
                        </div>
                        <SketchPicker
                            color={formik.values.primaryHexCode}
                            onChange={(color) => handlePrimaryColorChange(color.hex)}
                        />
                        <label htmlFor='secondaryHexCodeInput'>Secondary Color </label>
                        <input
                            id='secondaryHexCodeInput'
                            name='secondaryHexCode'
                            type='text'
                            value={formik.values.secondaryHexCode}
                            onChange={formik.handleChange}
                            style={{ border: `1px solid ${style.color}` }}
                        />
                        <SketchPicker
                            color={formik.values.secondaryHexCode}
                            onChange={(color) => handleSecondaryColorChange(color.hex)}
                        />
                        <button type='submit' id='submit-btn'
                            style={{ backgroundColor: `${style.color}`, color: `${style.backgroundColor}` }}>
                            Submit
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default Home