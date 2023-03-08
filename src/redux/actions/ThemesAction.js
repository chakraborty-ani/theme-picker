export const DARK = "DARK";
export const LIGHT = "LIGHT";
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