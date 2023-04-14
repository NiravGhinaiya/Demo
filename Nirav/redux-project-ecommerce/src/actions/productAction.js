// import axios from 'axios'
import FackeStoreapi from '../apis/FackeStoreapi'
import { actionType } from '../contants/actionType'

export const fetchProduct = () => async (dispatch) => {
    const response = await FackeStoreapi.get('/products')
    dispatch({ type: actionType.FEATH_PRODUCT, payload: response.data });
}

export const fetchProd = (id) => async (dispatch) => {
    const response = await FackeStoreapi.get(`/products/${id}`)
    dispatch({ type: actionType.SELECTED_PRODUCTS, payload: response.data });
}


export const setProducts = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product) => {
    return {
        type: actionType.SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeSelectedProducts = () => {
    return {
        type: actionType.REMOVE_SELECTED_PRODUCTS,
    }
}

export const removeAddProduct = (item) => {
    return {
        type: actionType.REMOVE_ADD_PRODUCT,
        payload: item
    }
}

export const addToCartProduct = (addCartP) => {
    // console.log('addCartP',addCartP)
    return {
        type: actionType.ADDCART_PRODUCT,
        payload: addCartP
    }
}

export const selectProductRemove = (deletePro) => {
    return {
        type: actionType.SELECT_PRODUCT_REMOVE,
        payload: deletePro
    }
}



export const buyProduct = (val) => {
    return {
        type: actionType.BYU_PRODUCT,
        payload: val
    }
}

export const buyProductNow = (val) => {
    return {
        type: actionType.BYU_PRODUCT_CART,
        payload: val
    } 
}