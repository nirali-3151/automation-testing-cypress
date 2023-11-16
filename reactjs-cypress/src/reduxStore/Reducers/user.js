import {
    EDIT_USER
} from '../Actions/ActionTypes';

const initialState = {
    user:[]
}

function UserReducer(state = initialState, action) {

    switch (action.type) {
        case EDIT_USER: {
            return {
                ...state,
                user: action.payload
            }
        }

        default:
            return state
    }

}

export default UserReducer

