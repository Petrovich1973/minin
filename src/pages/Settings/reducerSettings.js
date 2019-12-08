export const initializeSettings = {
    isVisibleFloat: true,
    virtualExchange: true,
    skinSize: 1,
}


export const stateSettings = (state, action) => {
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