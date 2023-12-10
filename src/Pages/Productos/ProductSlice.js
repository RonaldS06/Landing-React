import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        productList: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.productList = action.payload;
        },
    },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state) => state.products.productList;
export default productSlice.reducer;
