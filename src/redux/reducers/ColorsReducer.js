const initialState = [{
    themeName: '',
    primaryColor: '#000',
    secondaryColor: "#fff"
}]

const ColorChangeReducer = (state = initialState, action) => {
    if (action.type === 'THEME_NAME') {
        return {
            ...state,
            ...action.payload
        }
    }
    else if (action.type === 'PRIMARY_COLOR') {
        return {
            ...state,
            ...action.payload
        }
    }
    else if (action.type === 'SECONDARY_COLOR') {
        return {
            ...state,
            ...action.payload
        }
    }
    else {
        return state
    }
}

export default ColorChangeReducer