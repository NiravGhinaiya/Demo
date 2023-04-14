import { combineReducers } from "redux";
import { userDetail, loginUserData, productReduser, addToCartProduct } from './reduser'

const rootReduser = combineReducers({
    userData: userDetail,
    loginUserData: loginUserData,
    allProduct: productReduser,
    CartProduct: addToCartProduct
})

export default rootReduser;
