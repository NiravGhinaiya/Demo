import { actionType } from '../contants/actionType'

const initialState = {
    products: [],
}

export const ProductReduser = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };

        case actionType.FEATH_PRODUCT:
            return {
                ...state,
                products: action.payload
            };

        default:
            return state;
    }
}


export const selectedProductReduse = (state = {}, { type, payload }) => {
    switch (type) {
        case actionType.SELECTED_PRODUCTS:
            const fetData = { ...payload, quantity: 0 }
            // console.log('payload',{...payload, quantity: 0})
            return {
                ...state,
                ...fetData
            }

        case actionType.REMOVE_SELECTED_PRODUCTS:
            return {}

        default: return state
    }
}

const init = {
    addCartP: [],
    productBuy: {}
}

export const addToCartProduct = (state = init, { type, payload }) => {
    switch (type) {
        case actionType.ADDCART_PRODUCT:

            const addCount = state.addCartP.findIndex((itme) => itme.id === payload.id)
            if (addCount >= 0) {
                state.addCartP[addCount].quantity += 1
                // console.log(state.addCartP[addCount].quantity += 1 ,'addCount',addCount)
            } else {
                // console.log({...payload, quantity: 1} ,'addCount--addCount',addCount)
                const temp = { ...payload, quantity: 1 }
                return {
                    ...state,
                    addCartP: [
                        ...state.addCartP,
                        temp
                    ]
                }
            }

        case actionType.SELECT_PRODUCT_REMOVE:
            const deleteProduct = state.addCartP.filter((val) => val.id !== payload)
            return {
                ...state,
                addCartP: deleteProduct
            }

        case actionType.REMOVE_ADD_PRODUCT:
            const addCountDec = state.addCartP.findIndex((itme) => itme.id === payload.id)

            if (state.addCartP[addCountDec].quantity > 1) {
                state.addCartP[addCountDec].quantity -= 1
                // console.log('delProduct',state.addCartP[addCountDec].quantity -= 1)
                return {
                    ...state,
                    addCartP: [
                        ...state.addCartP
                    ]
                }
            } else if (state.addCartP[addCountDec].quantity === 1) {
                const removeProduct = state.addCartP.filter((val) => val.id !== payload.id)
                return {
                    ...state,
                    addCartP: removeProduct
                }
            }

        case actionType.BYU_PRODUCT:
            return {
                ...state,
                productBuy: payload
            }

        case actionType.BYU_PRODUCT_CART:
            const buyProductDelect = state.addCartP.filter((val) => val.id !== payload.id)
            return {
                ...state,
                addCartP: buyProductDelect
            }



        default: return state
    }
}
