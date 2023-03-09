import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { otherTheme } from '../redux/actions/ThemesAction';
import { setPrimaryColor, setSecondaryColor, setThemeName, setdefault } from '../redux/actions/ColorsAction';
import { addTheme } from '../redux/actions/ThemesListAction';
import '../styles/Home.css';

const containerVariants = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 2, delay: 0.5 }
    },
    exit: {
        opacity: 0,
        transition: { ease: 'easeInOut', duration: 1 }
    }
}

const buttonVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.4
        }
    }
}

const Home = () => {

    const dispatch = useDispatch();
    const themeProperties = useSelector(state => state.ColorChangeReducer);
    const style = useSelector(state => state.ThemeChangeReducer);

    const [primaryPaletteOpen, setPrimaryPaletteOpen] = useState(false);
    const [secondaryPaletteOpen, setSecondaryPaletteOpen] = useState(false);

    const handlePrimaryPaletteOpen = () => {
        setPrimaryPaletteOpen(prevState => !prevState);
    }

    const handleSecondaryPaletteOpen = () => {
        setSecondaryPaletteOpen(prevState => !prevState);
    }

    const INITIAL_VALUES = {
        themeName: themeProperties.themeName,
        primaryHexCode: themeProperties.primaryColor,
        secondaryHexCode: themeProperties.secondaryColor
    }

    const FORM_VALIDATION_SCHEMA = Yup.object().shape({
        themeName: Yup.string()
            .required('Theme name is required'),
        primaryHexCode: Yup.string()
            .required('Primary color is required'),
        secondaryHexCode: Yup.string()
            .required('Secondary color is required')
    })

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: INITIAL_VALUES,
        validationSchema: FORM_VALIDATION_SCHEMA,
        onSubmit: (values) => {
            let customThemes = JSON.parse(localStorage.getItem("customThemes"));
            customThemes.push(values);
            localStorage.setItem("customThemes", JSON.stringify(customThemes));
            dispatch(otherTheme(customThemes.length - 1));
            dispatch(addTheme(values));
            dispatch(setdefault());
            toast.success('Theme added and applied!', {
                position: "bottom-left",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            })
        }
    });

    const handlePrimaryColorChange = (color) => {
        dispatch(setThemeName(formik.values.themeName));
        dispatch(setPrimaryColor(color));
    }

    const handleSecondaryColorChange = (color) => {
        dispatch(setSecondaryColor(color));
    }

    return (
        <div className='container' style={style}>
            <motion.div className='form-box'
                style={{ ...style }}
                variants={containerVariants}
                initial="start"
                animate="end"
                exit="exit">
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
                        {formik.errors.themeName && formik.touched.themeName ? (
                            <div className='error-div'>{formik.errors.themeName}</div>
                        ) : null}
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
                                type="button"
                                style={{
                                    backgroundColor: `${style.color}`,
                                    color: `${style.backgroundColor}`,
                                    border: `1px solid ${style.color}`
                                }}
                                onClick={handlePrimaryPaletteOpen}>
                                {!primaryPaletteOpen ? `Open Palette` : `Close Palette`}
                            </button>
                        </div>
                        {formik.errors.primaryHexCode && formik.touched.primaryHexCode ? (
                            <div className='error-div'>{formik.errors.primaryHexCode}</div>
                        ) : null}
                        {primaryPaletteOpen && (
                            <span className='palette'>
                                <SketchPicker
                                    color={formik.values.primaryHexCode}
                                    onChange={(color) => handlePrimaryColorChange(color.hex)}
                                />
                            </span>
                        )}
                        <label htmlFor='secondaryHexCodeInput'>Secondary Color </label>
                        <div className='color-input'>
                            <input
                                id='secondaryHexCodeInput'
                                name='secondaryHexCode'
                                type='text'
                                value={formik.values.secondaryHexCode}
                                onChange={formik.handleChange}
                                style={{ border: `1px solid ${style.color}` }}
                            />
                            <button className='choose-btn'
                                type="button"
                                style={{
                                    backgroundColor: `${style.color}`,
                                    color: `${style.backgroundColor}`,
                                    border: `1px solid ${style.color}`
                                }}
                                onClick={handleSecondaryPaletteOpen}>
                                {!secondaryPaletteOpen ? `Open Palette` : `Close Palette`}
                            </button>
                        </div>
                        {formik.errors.secondaryHexCode && formik.touched.secondaryHexCode ? (
                            <div className='error-div'>{formik.errors.secondaryHexCode}</div>
                        ) : null}
                        {secondaryPaletteOpen && (
                            <span className='palette'>
                                <SketchPicker
                                    color={formik.values.secondaryHexCode}
                                    onChange={(color) => handleSecondaryColorChange(color.hex)}
                                />
                            </span>
                        )}
                        <motion.button type='submit' id='submit-btn'
                            style={{
                                backgroundColor: `${style.color}`,
                                color: `${style.backgroundColor}`,
                                border: `1px solid ${style.color}`
                            }}
                            variants={buttonVariants}
                            whileHover="hover">
                            Submit
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default Home