const initialState = {
    color: '#1b65a7',
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
    else if (action.type === 'NATURE') {
        return {
            ...state,
            ...action.payload
        }
    }
    else if (action.type === 'ROYALE') {
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