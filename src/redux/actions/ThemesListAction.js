export const ADD_THEME = "ADD_THEME";

export const addTheme = (theme) => {
    return {
        type: ADD_THEME,
        payload: {
            name: theme.themeName,
            color: theme.secondaryHexCode,
            backgroundColor: theme.primaryHexCode
        }
    }
}