export const initialState = {
    user: [...Array(12).keys()].map(skin => ({id: skin + 1})),
    bot: [...Array(600).keys()].map(skin => ({id: skin + 1})),
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SKINS_UPDATE":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default reducer