import React from 'react';
import Grid from "@mui/material/Grid";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

function OrderCard() {
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/:${5}`)} className='p-5 shadow-md shadow-black  hover:shadow-2xl border '>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className='flex cursor-pointer '>
            <img className='2-[5rem] h-[5rem]  object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGNBYgEc0nXKCPjvRzoor2dhpLtW8sP9_gw&usqp=CAU" alt="" />

            <div className='ml-5 space-y-2 '>
              <p className=''>Lorem ipsum dolor sit amet.</p>
              <p className='opacity-50 text-xs font-semibold '>Size:M</p>
              <p className='opacity-50 text-xs font-semibold '>Color:Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>1099</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon sx={{ width: "15px", height: "50px" }} className='text-green-600 mr-2' />
                <span>Delivered on March 03, 2024</span>
              </p>
              <p className='text-xs '>
                Your item has been delivered
              </p>
            </div>
          )}

          {false && (
            <p>
              <span>Expected Delivery on March 02, 2024</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
