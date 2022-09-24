import {
     GET_PRODUCTS, GET_SINGLE_PRODUCT, SET_PRODUCTS, SET_SINGLE_PRODUCT
} from "../../utils/Constants";

const initialState =  {
    products: [],
    singleProduct: {},
    id: ''
};

const prodcutsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state };

        case SET_PRODUCTS:
            const { products } = action;
            return { ...state, products }
       
        case GET_SINGLE_PRODUCT:
                return { ...state };
    
        case SET_SINGLE_PRODUCT:
                const { product } = action;
                return { ...state, product }
        default:
            return state;
    }
}

export default prodcutsReducer;