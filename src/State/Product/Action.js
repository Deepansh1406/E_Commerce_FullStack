import { API_BASE_URL, api } from "../../Config/apiConfig";
import { CREATE_PRODUCTS_FAILURE, CREATE_PRODUCTS_REQUEST, CREATE_PRODUCTS_SUCCESS, DELETE_PRODUCTS_FAILURE, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });
    const {
        colors,
        sizes,
        stock,
        sort,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        pageNumber,
        pageSize,
    } = reqData;

    try {
        const { data } = await api.get(`/api/products?colors=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

        console.log("Product data", data);
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error });
    }
};

export const findProductsByID = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
   
    const { productId } = reqData;
    console.log("productId from the action::", productId);

    try {
        const { data } = await api.get(`/api/products/id/${productId}`);
        console.log("data from the product__>",data);
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error });
    }
};


export const createProduct = (product)=>async (dispatch)=>{
    try{

        dispatch({type:CREATE_PRODUCTS_REQUEST})
        const {data} = await api.post(`/api/admin/products/`, product);
        console.log("Created Data-->" , data);
        dispatch({
            type:CREATE_PRODUCTS_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type:CREATE_PRODUCTS_FAILURE,
            payload: error.message
        })

    }
}

export const deleteProduct = (productId)=>async (dispatch)=>{
    try{

        dispatch({type:DELETE_PRODUCTS_REQUEST})
        const {data} = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);
        console.log("Deleted Data-->" , data);
        dispatch({
            type:DELETE_PRODUCTS_SUCCESS,
            payload: productId
        })

    }catch(error){
        dispatch({
            type:DELETE_PRODUCTS_FAILURE,
            payload: error.message
        })

    }
}