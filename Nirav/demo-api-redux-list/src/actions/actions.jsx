import { actionType } from "../contants/actionType"
// import FackeStoreapi from '../apis/FackeStoreapi'



export const signupUser = (data) => {
    return {
        type: actionType.SIGNUP_USER,
        payload: data
    }
}

export const loginData = (obj) => {
    return {
        type: actionType.LOGIN_USER_DATA,
    }
}


export const setProduct = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionType.SELECTED_PRODUCT,
        payload: product
    }
}
