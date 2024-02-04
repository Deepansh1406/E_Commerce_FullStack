import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from "@mui/material/colors";

function OrderDetails() {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-lg py-7">Delivery Address</h1>

        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className="space-y-5">

        {[1,1,1,1].map((item)=>
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtiCTQsWJK9hdafrjBLg2cUUKrxU5s62fhQ&usqp=CAU"
                alt=""
              />

              <div className="space-y-2 ml-5">
                <p className="font-semibold">Lorem ipsum dolor sit amet.</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color:pink</span>
                </p>
                <p>Lorem dolor sit </p>
                <p>$090 </p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarIcon sx={{ fontSize: "2rem" }} />
              <span>Rate & review products</span>
            </Box>
          </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
}

export default OrderDetails;
