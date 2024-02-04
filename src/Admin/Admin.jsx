import { CssBaseline, Drawer, useTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import List from "@mui/material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ListItemText } from "@mui/material";
import ProductTable from "./component/ProductTable";
import CreateProductForm from "./component/CreateProductForm";
import OrderTable from "./component/OrderTable";
import CustomerTable from "./component/CustomerTable";
import AdminDashBoard from "./component/DashBoard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import AddCardIcon from "@mui/icons-material/AddCard";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { logout } from "../State/AUTH/Action";
import LogoutIcon from "@mui/icons-material/Logout";


const menu = [
  { name: "DashBoard", path: "/admin", icon: <DashboardIcon /> },
  {
    name: "Products",
    path: "/admin/products",
    icon: <ProductionQuantityLimitsIcon />,
  },
  { name: "Customers", path: "/admin/customers", icon: <GroupIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <CategoryIcon /> },
  {
    name: "AddProducts",
    path: "/admin/product/create",
    icon: <AddCardIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleCloserUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("Logged out!! this id");
    dispatch(logout());
    handleCloserUserMenu();
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update screen width when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const drawer = (
    <Box
      style={{ backgroundColor: "#242B2E", color: "#ffffff" }}
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >

      
      <div className="p-4 text-center">
      <Avatar
          className="mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIllwVsPuuQ2a3Jy8Hdd94keYbQPK2SbeEA&usqp=CAU"
          style={{ width: screenWidth < 1000 ? '30px' : '80px', height: screenWidth < 1000 ? '30px' : '80px' }}
        />
         {screenWidth >= 1000 && (
        <Typography variant="h6">Deepanshu Varshney</Typography> )}
      </div>
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon style={{ color: "#ffffff" }}>
                {item.icon}
              </ListItemIcon>
              {screenWidth >= 1000 && <ListItemText>{item.name}</ListItemText>}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ color: "#ffffff" }}>
              <AccountCircleIcon />
            </ListItemIcon>
            {screenWidth >= 1000 && <ListItemText>Account</ListItemText>}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ color: "#ffffff" }}>
              <LogoutIcon />
            </ListItemIcon>
            {screenWidth >= 1000 && <ListItemText>Logout</ListItemText>}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className=" relative flex h-[100vh]">
      <CssBaseline />
      <div className="w-[15%] border border-r-gray-300 h-full fixed top-0">
        {drawer}
      </div>

      <div className="w-[85%] h-full ml-[15%]">
        <Routes>
          <Route path="/" element={<AdminDashBoard />} />
          <Route path="/product/create" element={<CreateProductForm />} />
          <Route path="/products" element={<ProductTable />} />
          <Route path="/orders" element={<OrderTable />} />
          <Route path="/customers" element={<CustomerTable />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
