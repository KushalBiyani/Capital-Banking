import { customerConstants } from "../actions/constants";

const initState = {
    customers: [],
    loading: false,
    error: null
};
const customerReducer = (state = initState, action) => {
    switch (action.type) {
        case customerConstants.CUSTOMERS_REQUEST:
            return state = {
                ...state,
               loading: true,
            }
        case customerConstants.CUSTOMERS_SUCCESS:
            return state = {
                ...state,
                customers: action.payload.customers,
                loading: false,
            }
        case customerConstants.CUSTOMERS_FAILED:
            return state = {
                ...initState,
                loading: false,
                error: action.payload.error
            }
        default:
                return state 

    }
}
export default customerReducer