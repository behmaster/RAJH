import axios from 'axios'

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_LIST_CATEGORY_REQUEST,
  PRODUCT_LIST_CATEGORY_SUCCESS,
  PRODUCT_LIST_CATEGORY_FAIL
} from '../constants/productConstants'

//allows action with in an action
//how we dispatch the action (requst/success/fail)
export const listProducts = () => async (dispatch) => {
  try {
    //want to dispatch the request.  pass in an object with a type.  This will call in the reducer
    dispatch({ type: PRODUCT_LIST_REQUEST })
    //we want to now make our request
    const { data } = await axios.get('/api/products')

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      //this is an if else statement  : = else
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    //want to dispatch the request.  pass in an object with a type.  This will call in the reducer
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    //we want to now make our request
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      //this is an if else statement  : = else
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//action creators dispatch bakc to the reducers
//we want to fire off the action in the home screen

export const listProductCategory = (category) => async (dispatch) => {
  try {
    //want to dispatch the request.  pass in an object with a type.  This will call in the reducer
    dispatch({ type: PRODUCT_LIST_CATEGORY_REQUEST })
    //we want to now make our request
    const { data } = await axios.get(`/api/products/${category}`)

    dispatch({
      type: PRODUCT_LIST_CATEGORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_CATEGORY_FAIL,
      //this is an if else statement  : = else
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}