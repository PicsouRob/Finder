import axios from 'axios';

import { GET_USER } from "./type";

export const getUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: GET_USER, value: res.data });
}