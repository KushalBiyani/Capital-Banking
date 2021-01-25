import customerReducer from './customer-reducer';
import transactionReducer from './transaction-reducer';
import transferReducer from './transfer-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    customer: customerReducer,
    transaction: transactionReducer,
    transfer: transferReducer
});

export default rootReducer;