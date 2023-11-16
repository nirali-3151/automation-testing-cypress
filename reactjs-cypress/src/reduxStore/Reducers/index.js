import { combineReducers } from 'redux'
import UserReducer from './user'


const reducer = combineReducers(
    {
        UserReducer:UserReducer,
    }
)

export default reducer;