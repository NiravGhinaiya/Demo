import { actionType } from '../contants/actionType'


const initialState = {
    userRecord: JSON.parse(localStorage.getItem('userRecord')) || []
}

export const userDetail = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SIGNUP_USER:
            state.userRecord = [
                ...state.userRecord,
                payload
            ]
            localStorage.setItem('userRecord', JSON.stringify(state.userRecord))
            return state

        default: return state
    }
}

const token = {
    loginUser: JSON.parse(localStorage.getItem('token')) || []
}

export const loginUserData = (state = token, { type, payload }) => {
    switch (type) {
        case actionType.LOGIN_USER_DATA:
            return state

        default: return state
    }
}

const initialStateProduct = {
    products: []
}

export const productReduser = (state = initialStateProduct, { type, payload }) => {
    switch (type) {
        case actionType.SET_PRODUCTS:
            return {
                ...state,
                products: payload    
            }

        default: return state
    }
}

const initialStateCart = {
    cartProduct: []
}

export const addToCartProduct = (state = initialStateCart , { type, payload }) => {
    switch (type) {
        case actionType.SELECTED_PRODUCT:
            state.cartProduct = [
                ...state.cartProduct,
                payload
            ]
            // console.log('state.cartProduct',state.cartProduct)
            return state      
    
        default: return state
    }
}




