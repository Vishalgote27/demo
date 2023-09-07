import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const userRegisterAction = createAsyncThunk("register", async (registerData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/register", registerData)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

})


export const userLoginAction = createAsyncThunk("login", async (loginData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/login", loginData, { withCredentials: true })
        localStorage.setItem("loginInfo", JSON.stringify(data.result))
        return data.result

    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.message || error.message)
    }
})


export const logoutUser = createAsyncThunk("logout", async (logoutData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/logout", logoutData)
        localStorage.removeItem("loginInfo")
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})
