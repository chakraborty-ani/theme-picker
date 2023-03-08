const initialState = {
    color: '#000',
    backgroundColor: "#f5f5fa"
}

const ThemeChangeReducer = (state = initialState, action) => {
    if (action.type === 'DARK') {
        return {
            ...state,
            ...action.payload
        }
    }
    else if (action.type === 'LIGHT') {
        return {
            ...state,
            ...action.payload
        }
    }
    else if (action.type === 'OTHER') {
        return {
            ...state,
            ...action.payload
        }
    }
    else {
        return state
    }
}

export default ThemeChangeReducer