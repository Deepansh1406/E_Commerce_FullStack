import { api } from "../../Config/apiConfig";
import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
} from "./ActionType";

export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST });
  
    try {
      const { data } = await api.get(`/api/cart/`);
      console.log("Getcart Data ::" , data);
      
      dispatch({ type: GET_CART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_CART_FAILURE, payload: error.message });
    }
  };
export const addItemToCart = (reqData) => async(dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  
    try {
      const { data } = await api.put("/api/cart/add", reqData);
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
      console.log("add item to cart data from its action::>", data);
    } catch (error) {
      dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
    }
  };
export const removeCartItem =(cartItemId) =>async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  try {
    const { data } =  await api.delete(`/api/admin/products/${cartItemId}/delete`);
    console.log("The data from removeCartItem:-->", data);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload:cartItemId });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
  }
};
export const updateCartItem = (reqData) =>async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.put(`/api/admin/products/${reqData.cartItemId}/update`,reqData) ;
    console.log("The data from updateCartItem:-->", data);
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
  }
};

