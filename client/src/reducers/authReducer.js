import { GET_USER } from '../actions/type';

export default function authReducer(state = false, action) {
    switch (action.type) {
        case GET_USER:
            return action.value || false;
        default:
            return state;
    }
}