export const DARK = "DARK";
export const LIGHT = "LIGHT";
export const NATURE = "NATURE";
export const OCEAN = "OCEAN";
export const OTHER = "OTHER";

export const darkTheme = () => {
    return {
        type: DARK,
        payload: {
            color: '#f5f5fa',
            backgroundColor: "#1f1717"
        }
    }
}

export const lightTheme = () => {
    return {
        type: LIGHT,
        payload: {
            color: '#1f1717',
            backgroundColor: "#f5f5fa"
        }
    }
}

export const natureTheme = () => {
    return {
        type: NATURE,
        payload: {
            color: '#d7eadd',
            backgroundColor: "#498553"
        }
    }
}

export const oceanTheme = () => {
    return {
        type: OCEAN,
        payload: {
            color: '#f2f4f5',
            backgroundColor: "#1b65a7"
        }
    }
}

export const otherTheme = (index) => {
    const themeProps = JSON.parse(localStorage.getItem("customThemes"))[index];
    return {
        type: OTHER,
        payload: {
            color: themeProps.secondaryHexCode,
            backgroundColor: themeProps.primaryHexCode
        }
    }
}