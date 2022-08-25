import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {
  productListReducer,
  productDetailsReducer,
  productListCategoryReducer
} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'

const preloadedState = {}

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productListCategory: productListCategoryReducer,
  cart: cartReducer,
}

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []

const initialState = {
cart: { cartItems: cartItemsFromStorage},

}

const middleware = [thunk]

const store = configureStore({
  reducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production', //only show devTools when in production
})

export default store
