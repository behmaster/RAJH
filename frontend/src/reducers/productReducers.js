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

//handle state for product list we see on the home page (takes in inital state (object) and action) has a type eval below, and contain a payload that we fetch from the server.
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    //make the request
    case PRODUCT_LIST_REQUEST:
      //curently loading
      return { loading: true, products: [] }

    //successful resonse
    case PRODUCT_LIST_SUCCESS:
      //done loading done making a request as to why it is false
      return { loading: false, products: action.payload }

    //if it fails send error through the state
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
//reviews is set to an empty array as how it is stored in this example with mongoose
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    //make the request
    case PRODUCT_DETAILS_REQUEST:
      //curently loading
      //whatever is instate above will display by putting ...state
      return { loading: true, ...state }

    //successful resonse
    case PRODUCT_DETAILS_SUCCESS:
      //done loading done making a request as to why it is false
      //make sure to change products to product
      return { loading: false, product: action.payload }

    //if it fails send error through the state
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

//to use the reducer we have to add it to our store
//CREATED CONSTANTS

export const productListCategoryReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    //make the request
    case PRODUCT_LIST_CATEGORY_REQUEST:
      //curently loading
      return { loading: true, products: [] }

    //successful resonse
    case PRODUCT_LIST_CATEGORY_SUCCESS:
      //done loading done making a request as to why it is false
      return { loading: false, products: action.payload }

    //if it fails send error through the state
    case PRODUCT_LIST_CATEGORY_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}