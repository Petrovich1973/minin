export const initialState = {
    isVisibleFloat: true,
    virtualExchange: true,
    skinSize: 1,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SETTINGS_UPDATE":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default reducer