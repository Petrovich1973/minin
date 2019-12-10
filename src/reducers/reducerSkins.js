export const initialState = {
    user: [...Array(12).keys()].map(skin => ({id: skin + 1})),
    bot: [...Array(600).keys()].map(skin => ({id: skin + 1})),
    popover: {
        isOpen: false,
        position: { x: 200, y: 200 },
        id: null,
        content: 'Content Popover'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SKINS_UPDATE":
            return {
                ...state,
                ...action.payload
            }
        case "POPOVER_RESET":
            return {
                ...state,
                popover: {...initialState.popover}
            }
        default:
            return state;
    }
}

export default reducer