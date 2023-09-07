import { configureStore } from "@reduxjs/toolkit"
import publicSlice from "./slice/publicSlice"
import adminSlice from "./slice/adminSlice"
import productSlice from "./slice/productSlice"
const reduxStore = configureStore({
    reducer: {
        public: publicSlice,
        adminBy: adminSlice,
        product: productSlice
    }

})

export default reduxStore