import {
    EDIT_USER,
} from "./ActionTypes";


export const editUser= (payload) => {
    return {
        type: EDIT_USER,
        payload
    };
};