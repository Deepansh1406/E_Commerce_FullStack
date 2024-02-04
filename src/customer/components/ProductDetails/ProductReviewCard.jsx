import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Rating from '@mui/material/Rating';

function ProductReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
            <div className="space-y-2 ">
            <div>
            <p className="font-semibold text-lg">RAME</p>
            <p className="opacity-70">April 6, 2022</p>
            </div>
            </div>

            <Rating value={4.6} name="half-rating" readOnly precision={0.5}/>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cupiditate?</p>


        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard;
