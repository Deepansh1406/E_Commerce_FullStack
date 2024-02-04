import {

  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";
import { api } from "../../Config/apiConfig";

export const createOrder = (reqData) => async (dispatch) => {
  console.log("Reqdata", reqData);
  dispatch({ type: CREATE_ORDER_REQUEST });

  try {
    const { data } = await api.post(`/api/orders/`, reqData.address);
 

    if (data.id) {
      reqData.navigate({ search: `?step=2&order_Id=${data.id}` });

    }
    console.log("created Order!!", data);
    console.log("data id", data.id);

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

export const getOrderById = (orderId ) => async (dispatch) => {
  console.log("getOrderById called with orderId:", orderId);
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log("getOrder data by ID!!", data);
    dispatch({
      type: GET_ORDER_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: GET_ORDER_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};
