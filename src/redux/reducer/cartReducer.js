import {
    ADDITEMTOCART, DELETEITEMFROMCART, DELETEQUANTITYITEMFROMCART
} from "../../utils/Constants";

const initialState =  {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    const product = action?.payload ?? {};

    switch (action.type) {
        case ADDITEMTOCART:
            const isExist = state.cart.find((x) => x.id === product.id);
            if (isExist) {
                // Increase quantity by 1
                return {
                    cart: state.cart.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
                }
            } else {
                const product = action.payload;
                return {
                    cart: [
                    ...state.cart,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            }

        case DELETEITEMFROMCART:
            const isItemToDeleteExist = state.cart.find((x) => x.id === product.id);
            if (isItemToDeleteExist.qty === 1) {
                return {
                    cart: state.cart.filter((x) => x.id !== isItemToDeleteExist.id)
                }
            } else {
                return {
                    cart: state.cart.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
                }
            }

        case DELETEQUANTITYITEMFROMCART:
            const isItemQuantityToDeleteExist = state.cart.find((x) => x.id === product.id);
            return {
                cart: state.cart.filter((x) => x.id !== isItemQuantityToDeleteExist.id)
            }

        default:
            return state;
    }
}

export default cartReducer;