import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/Action";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const initialSizes = [
  { name: "S", quantity: "0" },
  { name: "M", quantity: "0" },
  { name: "L", quantity: "0" },
];
const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountPresent: "",
    discountPrice: "",
    price: "",
    sizes: initialSizes,
    quantity: "",
    description: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
  });

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);
    const sizes = [...productData.sizes];
    setProductData((prevData) => ({
      ...prevData,
      sizes: sizes,
    }));
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));
    console.log("ProductData", productData);
    setSnackbarOpen(true);
    e.target.reset();

    setProductData({
      imageUrl: "",
      brand: "",
      title: "",
      color: "",
      discountPresent: "",
      discountPrice: "",
      price: "",
      sizes: initialSizes,
      quantity: "",
      description: "",
      topLevelCategory: "",
      secondLevelCategory: "",
      thirdLevelCategory: "",
    });
  };
  return (
    <Fragment>
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center max-w-full"
      >
        Add new Product
      </Typography>

      <form onSubmit={handleSubmit} className="min-h-screen ml-8">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image Url"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={productData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Percent"
              name="discountPresent"
              value={productData.discountPresent}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountPrice"
              value={productData.discountPrice}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Percentage"
              name="discountPresent"
              value={productData.discountPresent}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel htmlFor="topLevelCategory">
                Top Level Category
              </InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleChange}
              >
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>  
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel htmlFor="secondLevelCategory">
                Second Level Category
              </InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleChange}
              >
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
                <MenuItem value="Brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel htmlFor="thirdLevelCategory">
                Third Level Category
              </InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleChange}
              >
                <MenuItem value="mens_kurta">Mens_kurta</MenuItem>
                <MenuItem value="Shirt">Shirt</MenuItem>
                <MenuItem value="Men_jeans">Men_jeans</MenuItem>
               
                <MenuItem value="Sweaters">Sweaters</MenuItem>
                <MenuItem value="Jackets">Jackets</MenuItem>
                <MenuItem value="Wathces">Watches</MenuItem>
                <MenuItem value="Wallets">Wallets</MenuItem>
                <MenuItem value="Innerwear">Innerwear</MenuItem>
                <MenuItem value="Activewear">Activewear</MenuItem>
                <MenuItem value="Tops">Tops</MenuItem>
                <MenuItem value="Dresses">Dresses</MenuItem>88
                <MenuItem value="Womens_jeans">Womens_jeans</MenuItem>
                <MenuItem value="Lengha Choli">Lengha Choli</MenuItem>
                <MenuItem value="Sweaters">Sweaters</MenuItem>
              </Select>
            </FormControl>
          </Grid>
         

          {productData.sizes.map((size, index) => (
            <Grid container item spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Size Name"
                  name="sizes"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                />
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add new Product
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Product successfully added!
        </MuiAlert>
      </Snackbar>
    </Fragment>
  );
};

export default CreateProductForm;
