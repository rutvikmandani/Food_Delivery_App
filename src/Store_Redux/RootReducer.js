import { combineReducers } from "redux";
import { Reducer } from "./Reducer";

const RootReducer = combineReducers({
    s_value: Reducer
})

export default RootReducer;