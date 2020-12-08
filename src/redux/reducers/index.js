import foodReducer from './foodReducer'
import  groupReducer from './group-food'
import cart from './cartReducer'
import userReducer from './userReducer';
import invoiceReducer from './invoiceReducer'
import topping from './toppingReducer';
import loginReducer from '../reducers/LoginReducer'

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    foodData: foodReducer,
    groupData:groupReducer,
    cartData:cart,
    userData: userReducer,
    invoiceData: invoiceReducer,
    toppingData:topping,
    loginData:loginReducer
});
export default rootReducer;