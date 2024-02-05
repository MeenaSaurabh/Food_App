import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        // user : userReducer
    }
})

export default appStore
// using this in App.jsx, Header, ItemList, Cart & Body

// STEPS -
// Install @reduxjs/toolkit and react-redux
// Build our Store
// connect our store to our app
// slice (cartSlice)
// dispatch action
// Selector
