export const initialState = {
    login: 'minin-deniska@gmail.com',
    password: null,
    avatar: 'https://cdn.pixabay.com/photo/2016/11/24/21/39/sexy-1857310_960_720.jpg',
    balance: '2 000.34',
    bonus: true,
    steamGuard: true,
    tradeUrl: 'https://steamcommunity.com/traseoffer/new/?partner=34676787&token=Wk4u9PHw',
    sellerLink: 'https://steamcommunity.com/traseoffer/new/?partner=34676787&token=Wk4u9PHw',
    steamID64: '76561197998942485',
    language: 'RU',
    currency: '$'
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_CURRENT_UPDATE":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default reducer