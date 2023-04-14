const initialState = {
    productData: []
}

export default function FetchApiData(state = initialState, { type, payload }) {
    switch (type) {
        case 'PRODUCT_DATA_FETCH':
            state.productData = [...payload]
            return state.productData;

        default:
            return state;
    }
}