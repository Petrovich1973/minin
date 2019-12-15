export const initialState = {
    isVisibleFloat: true,
    virtualExchange: true,
    skinSize: 1,
    float: [
        {value: [0, 7], color: 'blue', label: 'FN', exterior: 'Прямо с завода'},
        {value: [8, 15], color: 'green', label: 'MW', exterior: 'Немного поношенное'},
        {value: [16, 38], color: 'yellow', label: 'FT', exterior: 'После полевых испытаний'},
        {value: [39, 45], color: 'orange', label: 'WW', exterior: 'Поношенное'},
        {value: [46, 100], color: 'red', label: 'BS', exterior: 'Закалённое в боях'}
    ]
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