import { AccountBox, Groups, Home, ModeNight, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'

import React from 'react'

const Sidebar = ({mode,setMode}) => {
    return (
        <Box flex={1} p={2} sx={{display:{xs: "none", sm: "block" }}}>
<Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                            <ListItemText primary="Homepage" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Groups />
                            <ListItemText primary="Homepage" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Storefront />
                            <ListItemText primary="Marketplace" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Settings />
                            <ListItemText primary="Settings" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <AccountBox />
                            <ListItemText primary="Profile" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
            </Box>
    )
}

export default Sidebar