import { Mail, Notifications, Pets } from "@mui/icons-material";
import { AppBar, Avatar, AvatarGroup, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
})); 
const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
})); 
const UserBox = styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
})); 



const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
            <AppBar position="sticky">
                <StyledToolbar>
                    <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>G WEALTH</Typography>
                    <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                    <Search><InputBase placeholder="search..."/></Search>
                    <Icons>
                        <Badge badgeContent={4} color="error">
                        <Mail />
                        </Badge>
                        <Badge badgeContent={2} color="error">
                        <Notifications />
                        </Badge>
                        <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                        onClick={(e) =>setOpen(true)}
</AvatarGroup>
                        
                        </Icons>
                        <UserBox 
                        onClick={(e) =>setOpen(true)}>
                        
                        <Avatar sx={{width:30, height:30}} src=""/>
                        <Typography variant="span">John</Typography>
                        </UserBox>
                </StyledToolbar>

                <Menu
                id="demo-position-menu"
                aria-labelledby="demo-position-button"
                open={open} 
                onClose={(e) =>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal:'right',
                }}
                transfromOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                >
                <MenuItem>Proifile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
                </Menu>
            </AppBar>
        );
};

export default Navbar;