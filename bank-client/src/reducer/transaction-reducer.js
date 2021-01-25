import { transactionConstants } from "../actions/constants";

const initState = {
    transactions: [],
    loading: false,
    error: null
};
const transactionReducer = (state = initState, action) => {
    switch (action.type) {
        case transactionConstants.TRANSACTIONS_REQUEST:
            return state = {
                ...state,
                loading: true,
            }
        case transactionConstants.TRANSACTIONS_SUCCESS:
            return state = {
                ...state,
                transactions: action.payload.transactions,
                loading: false,
            }
        case transactionConstants.TRANSACTIONS_FAILED:
            return state = {
                ...initState,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}
export default transactionReducer;