export const DARK = "DARK";
export const LIGHT = "LIGHT";
export const NATURE = "NATURE";
export const ROYALE = "ROYALE";
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
            color: '#1b65a7',
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

export const royaleTheme = () => {
    return {
        type: ROYALE,
        payload: {
            color: '#f5a623',
            backgroundColor: "#052b52"
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