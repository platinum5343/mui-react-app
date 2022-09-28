import { Avatar, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Box } from '@mui/system';
import { useState } from 'react';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});
const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
});

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <Tooltip onClick={e=>setOpen(true)}
         title="Delete" 
        sx={{
            position: "fixed",
             bottom: 20,
              left:{ xs: "clac(50%)", md: 30 },
        }}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyledModal 
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
            <UserBox>
                <Avatar 
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 30, height: 30 }}
                />
                <Typography fontWeight={500} variant="span">John Doe</Typography>
            </UserBox>
            <TextField
            sx={{width:"100%"}}
            id="standard-multiline-static"
            multiline
            row={3}
            placeholder="What's on your mind"
            variant="standard"
            />
            <stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotions/>
                <Image color="secondary"/>
                <VideoCameraBack color="success" />
                <PersonAdd color="error" />
            </stack>
            <ButtonGroup
            fullWidth
            variant="contained" 
            aria-label="outlined primary button group"
            >
            <Button>Post</Button>
            <Button
            sx={{width:"100px"}}
            >
                <DateRange /></Button>
            </ButtonGroup>
        </Box>
        </StyledModal>
        </>
    );
};

export default Add;