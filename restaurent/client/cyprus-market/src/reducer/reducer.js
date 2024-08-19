import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addToCartItems: [],
    total: 0,
    currentProduct: null,
};

const slice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.addToCartItems.push(action.payload);
            state.total += action.payload.price;
        },
        changeTotal: (state, action) => {
            state.total = action.payload;
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload;
        }
    }
});

// Export the actions
export const { addToCart, changeTotal, setCurrentProduct } = slice.actions;

// Export the reducer
export const cartReducer = slice.reducer;
