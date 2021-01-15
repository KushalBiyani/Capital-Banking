import { transactionConstants } from "./constants";
import {api} from '../url';
import axios from "axios";

export const getTransaction = () => {
    return async dispatch => {

        dispatch({ type: transactionConstants.TRANSACTIONS_REQUEST });
        const res = await axios.get(`${api}/history`);
        if (res.status === 200) {

            const [...transactions ] = res.data;
            dispatch({
                type: transactionConstants.TRANSACTIONS_SUCCESS,
                payload: { transactions: transactions }
            });
        } else {
            dispatch({
                type: transactionConstants.TRANSACTIONS_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}