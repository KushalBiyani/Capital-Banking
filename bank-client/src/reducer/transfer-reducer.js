import { transferConstants } from "../actions/constants";

const initState = {
    transaction: [],
    loading: false,
    error: null,
    status: 0
};
const transferReducer = (state = initState, action) => {
    switch (action.type) {
        case transferConstants.TRANSFER_REQUEST:
            return state = {
                ...state,
                loading: true,
                status: 0
            }
        case transferConstants.TRANSFER_SUCCESS:
            return state = {
                ...state,
                transaction: action.payload.transaction,
                status: action.payload.status,
                loading: false,
            }
        case transferConstants.TRANSFER_FAILURE:
            return state = {
                ...state,
                loading: false,
                status: action.payload.status,
                error: action.payload.error
            }
        default:
            return state
    }
}
export default transferReducer;