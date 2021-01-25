import { transferConstants } from "./constants";
import { api } from '../url';
import axios from "axios";

export const postTransfers = (form) => {
    return async dispatch => {
        dispatch({ type: transferConstants.TRANSFER_REQUEST });
        try {
            const res = await axios.post(`${api}/transfer`, form);
            console.log(res)
            if (res.status === 200) {
                const transaction = []
                transaction.push(res.data)
                dispatch({
                    type: transferConstants.TRANSFER_SUCCESS,
                    payload: {
                        transaction: transaction,
                        status: 200
                    }
                });

            } else {
                dispatch({
                    type: transferConstants.TRANSFER_FAILURE,
                    payload: {
                        error: res.data.error,
                        status: res.status
                    }
                });
            }
        }
        catch (error) {
            console.log(error.response);
        }
    }
}
export const reset = (form) => {
    return async dispatch => {
        dispatch({ type: transferConstants.TRANSFER_REQUEST });
    }
}
