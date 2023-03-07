export const PRIMARY_COLOR = "PRIMARY_COLOR";
export const SECONDARY_COLOR = "SECONDARY_COLOR";
export const THEME_NAME = "THEME_NAME";

export const setPrimaryColor = (color) => {
    return {
        type: PRIMARY_COLOR,
        payload: {
            primaryColor: color
        }
    }
}

export const setSecondaryColor = (color) => {
    return {
        type: SECONDARY_COLOR,
        payload: {
            secondaryColor: color
        }
    }
}

export const setThemeName = (name) => {
    return {
        type: THEME_NAME,
        payload: {
            themeName: name
        }
    }
}
