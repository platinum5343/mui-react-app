import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box  flex={2} p={2} sx={{display:{xs: "none", sm: "block" }}}>
            <Box position="fixed" width={300}>
                <Typography variant="h6">Online Friends</Typography>
                <AvatarGroup max={5}>
  <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg"/>
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg"/>
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg"/>
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg"/>
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg"/>
  <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg"/>
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/1.jpg"/>
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/1.jpg"/>
</AvatarGroup>

<Typography variant="h6" mt={2}>
    Latest Photos
</Typography>
    <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
            <img
            src="https://mui.com/static/images/avatar/1.jpg"
            alt=""
            />
        </ImageListItem>
        <ImageListItem>
            <img
            src="https://mui.com/static/images/avatar/1.jpg"
            alt=""
            />
        </ImageListItem>
        <ImageListItem>
            <img
            src="https://mui.com/static/images/avatar/1.jpg"
            alt=""
            />
        </ImageListItem>
    </ImageList>
    <Typography variant="h6" mt={2} mb={2}>
    Latest Conversation
</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt='Remsy Sharp' src="https://mui.com/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                primary='Brunch thos weekend'
                secondary={
                    <React.Fragment>
                        <Typography sx={{ display: 'inline' }}
                        components="span"
                        variants="body2"
                        color="texts.primary"
                        >
                            All commors
                        </Typography>
                        {" - I'll be in your neighborhood doing errands this.."}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="insert" components="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt='Remsy Sharp' src="https://mui.com/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                primary='Brunch thos weekend'
                secondary={
                    <React.Fragment>
                        <Typography sx={{ display: 'inline' }}
                        components="span"
                        variants="body2"
                        color="texts.primary"
                        >
                            All commors
                        </Typography>
                        {" - I'll be in your neighborhood doing errands this.."}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="insert" components="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt='Remsy Sharp' src="https://mui.com/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                primary='Brunch thos weekend'
                secondary={
                    <React.Fragment>
                        <Typography sx={{ display: 'inline' }}
                        components="span"
                        variants="body2"
                        color="texts.primary"
                        >
                            All commors
                        </Typography>
                        {" - I'll be in your neighborhood doing errands this.."}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="insert" components="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt='Remsy Sharp' src="https://mui.com/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                primary='Brunch thos weekend'
                secondary={
                    <React.Fragment>
                        <Typography sx={{ display: 'inline' }}
                        components="span"
                        variants="body2"
                        color="texts.primary"
                        >
                            All commors
                        </Typography>
                        {" - I'll be in your neighborhood doing errands this.."}
                    </React.Fragment>
                }
                />
            </ListItem>
            
        </List>
            </Box>
            </Box>
    )
}

export default Rightbar