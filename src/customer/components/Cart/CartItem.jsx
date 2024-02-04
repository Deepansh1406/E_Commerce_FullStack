import React from "react";

import { IconButton } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleUpdateCartItems = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.product?.id,
      
    };
    console.log("Before dispatch UPDATE:", data);
    dispatch(updateCartItem(data));
    console.log("After dispatch UPDATECARTITEM:", data); 
  };
  const handleRemoveCartItem =()=>{
      dispatch(removeCartItem(item?.product?.id))
      console.log("BEFORE dispatch DELEETE:", item); 
      console.log(item?.product?.id);
      console.log("After dispatch DELETECART:", item); 
  }
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-ful h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1 ">
          <p className="font-semibold ">{item?.product?.title}</p>
          <p className="opacity-70 ">Sizes:{item?.size}</p>
          <p className="opacity-70 mt-2 ">{item?.product?.brand}</p>
          <div className="flex space-x-5 items-center text-lg text-gray-900 pt-6 ">
            <p className="font-semibold">₹{item?.product?.price}</p>
            <p className="opacity-50 line-through">
              ₹{item?.product?.discountPresent}
            </p>
            <p className="text-green-600 font-semibold">
              ₹{item?.product?.discountPrice}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg;space-x-10  pt-4 ">
        <div className="flex items-center space-x-2 ">
          <IconButton
            onClick={() => handleUpdateCartItems(-1)}
            disabled={item?.quantity <= 1}
          >
            <RemoveCircleOutlineOutlinedIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
          <IconButton
          onClick={() => handleUpdateCartItems(1)}
           sx={{ color: "#9155fd" }}>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </div>

        <div>
          <Button
          onClick={handleRemoveCartItem}
           sx={{ color: "#9155fd" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
