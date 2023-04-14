import { combineReducers } from "redux";            
import { ProductReduser, selectedProductReduse, addToCartProduct } from './ProductReduser'

const rootReduser = combineReducers({
    allProduct: ProductReduser,
    product: selectedProductReduse,
    addCartP: addToCartProduct,
    productBuy : addToCartProduct
});

export default rootReduser