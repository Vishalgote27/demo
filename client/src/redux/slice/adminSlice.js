import { createSlice } from "@reduxjs/toolkit";
import { adminAddProduct, adminGetProduct } from "../Actions/adminActions";

const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(adminAddProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(adminAddProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.addedProduct = true
            })
            .addCase(adminAddProduct.rejected, (state, { payload }) => {
                state.loading = true
                state.error = payload
            })


            .addCase(adminGetProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(adminGetProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.allProducts = payload
            })
            .addCase(adminGetProduct.rejected, (state, { payload }) => {
                state.loading = true
                state.error = payload
            })
    }
})

export default adminSlice.reducer