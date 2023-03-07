const initialState = []

const AddThemeReducer = (state = initialState, action) => {
    if (action.type === 'ADD_THEME') {
        return [
            ...state,
            action.payload
        ]
    }
    else {
        return state
    }
}

export default AddThemeReducer;