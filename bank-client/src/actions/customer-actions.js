import { customerConstants } from "./constants";
import {api} from '../url';
import axios from "axios";

export const getCustomers = () => {
    return async dispatch => {

        dispatch({ type: customerConstants.CUSTOMERS_REQUEST });
        const res = await axios.get(`${api}/custDetails`);
        
        if (res.status === 200) {
            const [...customers ]= res.data;
            dispatch({
                type: customerConstants.CUSTOMERS_SUCCESS,
                payload: { customers: customers }
            });
            
        } else {
            dispatch({
                type: customerConstants.CUSTOMERS_FAILURE,
                payload: { error: res.data.error }
            });
            
        }
    }
}