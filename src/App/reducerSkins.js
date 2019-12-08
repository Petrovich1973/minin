export const initializeSkins = {
    user: [],
    bot: [...Array(1000).keys()].map(skin => ({id: skin + 1})),
}


export const stateSkins = (state, action) => {
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