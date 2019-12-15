const randomUrlsPic = [
    'https://pic.csgo.trade/730/mkz.jpg?v=22',
    'https://pic.csgo.trade/730/tn1.jpg?v=22',
    'https://pic.csgo.trade/730/jzt.jpg?v=22',
    'https://pic.csgo.trade/730/of3.jpg?v=22',
    'https://pic.csgo.trade/730/k17.jpg?v=22',
    'https://pic.csgo.trade/v2u.jpg?v=22',
    'https://pic.csgo.trade/730/n4s.jpg?v=22',
    'https://pic.csgo.trade/kwv.jpg?v=22',
    'https://pic.csgo.trade/730/p5n.jpg?v=22',
    'https://pic.csgo.trade/pbz.jpg?v=22'
]


export const initialState = {
    user: [...Array(12).keys()].map(skin => ({id: skin + 1, pic: randomUrlsPic[Math.floor(Math.random() * randomUrlsPic.length)]})),
    bot: [...Array(800).keys()].map(skin => ({id: skin + 1, pic: randomUrlsPic[Math.floor(Math.random() * randomUrlsPic.length)]})),
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