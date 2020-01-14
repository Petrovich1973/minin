import { combineReducers } from "redux"

import user from "./reducerUserCurrent"
import skins from "./reducerSkins"
import settings from "./reducerSettings"

export default combineReducers({
    user,
    skins,
    settings
})