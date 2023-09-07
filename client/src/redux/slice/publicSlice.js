import { createSlice } from "@reduxjs/toolkit"
import { logoutUser, userLoginAction, userRegisterAction } from "../Actions/publicActions"

const local = JSON.parse(localStorage.getItem("loginInfo"))
const publicSlice = createSlice({
    name: "public",
    initialState: {
        userLogin: local,
        cart: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers: {
        resetUserAction: (state) => {
            state.error = null
            state.userRegisted = null
            // state.userLogin = null
        },
        addToCart: (state, { payload }) => {
            state.cart.push(payload)
            state.total = state.cart.reduce((total, item) => total + (item.qty * item.price), 0)
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        deleteCartItem: (state, { payload }) => {
            state.cart.splice(payload, 1)
        },


    },
    extraReducers: builder => {
        builder

            .addCase(userRegisterAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userRegisterAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userRegisted = true
            })
            .addCase(userRegisterAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(userLoginAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userLogin = payload
            })
            .addCase(userLoginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(logoutUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(logoutUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userLogin = false
            })
            .addCase(logoutUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }

})

export const { resetUserAction, logoutAction, addToCart, deleteCartItem, } = publicSlice.actions
export default publicSlice.reducer