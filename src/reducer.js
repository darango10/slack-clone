export const initialState = {
    user: 'aa'
};

export const actionTypes = {
    SET_USER: "SER_USER"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}

export default reducer;
