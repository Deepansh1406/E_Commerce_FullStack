import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddressCard from "../AddressCard/AddressCard";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
function DeliveryAddressFrom() {


  const dispatch= useDispatch();
  const navigate = useNavigate();
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address={
      firstName:data.get('firstname'),
      lastName:data.get('lastname'),
      streetAddress:data.get('address'),
      city:data.get('city'),
      state:data.get('State'),
      zipCode:data.get('zipCode'),
      Phone:data.get('phone'),
    }

    const orderData ={address, navigate}
    dispatch(createOrder(orderData))
    console.log("Address", address);
    console.log("orderrrrrrrrrrr->>>>",orderData);
  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer ">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145,85,253)" }}
              size="large"
              variant="contained"
            >
              Delivered Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5 ">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    fullWidth
                    autoComplete="Given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    fullWidth
                    autoComplete="Given-name"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="Given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="Given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="State"
                    name="State"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="Given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zipCode"
                    name="zipCode"
                    label="Zip/Postal"
                    fullWidth
                    autoComplete="Shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    autoComplete="Given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button
              sx={{py:1.5, mt: 2, bgcolor: "RGB(145,85,253)" }}
              size="large"
              variant="contained"
              type="submit"
            >
              Deliver Here
            </Button>
            
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAddressFrom;
