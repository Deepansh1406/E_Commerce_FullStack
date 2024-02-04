import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import { Card, Grid, IconButton } from '@mui/material';
import { Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import { CardHeader } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardContent } from '@mui/material';
const salesData= [
    {
        states:"245K",
        title:"Sales",
        color:" #E5D68A",
        icon:<TrendingUpIcon sx={{fontSize:"1.75rem"}}/> 

    },
    {
        states:"125K",
        title:"Customers",
        color:" #22CB5C",
        icon:<AccountCircleIcon sx={{fontSize:"1.75rem"}}/> 

    },
    {
        states:"1.51K",
        title:"Products",
        color:" #DE4839",
        icon:<SettingsCellIcon sx={{fontSize:"1.75rem"}}/> 

    },
    {
        states:"88K",
        title:"Revenue",
        color:" #12B0E8",
        icon:<AttachMoneyIcon sx={{fontSize:"1.75rem"}}/> 

    },
]
// ...

const renderStates = () => {
    return salesData.map((item, index) => (
      <Grid item xs={12} sm={3} key={index}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: "white",
              background: `${item.color}`,
            }}
          >
            {item.icon}
          </Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="caption">{item.title}</Typography>
            <Typography variant="h6">{item.states}</Typography>
          </Box>
        </Box>
      </Grid>
    ));
  };
  
  const MonthlyOverView = () => {
    return (
      <Card sx={{bgcolor:"#242B2E",
      color:"white"}}>
        <CardHeader
          title="Monthly Overview"
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          subheader={
            <Typography variant="body2">
              <Box
                component="span"
                sx={{ fontWeight: 600}}
              >
                Total 48.6% growth
              </Box>
            😎  This Month
            </Typography>
          }
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: "2rem !important",
              letterSpacing: "0.15px !important",
            },
          }}
        />
        <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
          <Grid container spacing={[5, 0]}>
            {renderStates()}
          </Grid>
        </CardContent>
      </Card>
    );
  };
  
  export default MonthlyOverView;
  