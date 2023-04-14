export const fetchApiData = () => async (dispatch, getState, api) => {
    return await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: 'PRODUCT_DATA_FETCH',
                payload: json,
            })
        })
}