import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const adminAddProduct = createAsyncThunk("adminProuct", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/admin/upload", productData)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})

export const adminGetProduct = createAsyncThunk("adminGetProucts", async (productGetData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/admin")
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})


export const editProduct = createAsyncThunk("editproduct", async (edit, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.put(`/admin/edit/${edit._id}`, edit)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})