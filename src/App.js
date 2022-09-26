import React from 'react'
import Sidebar from './components/Sidebar'
import Rightbar from './components/RightBar';
import Feed from './components/Feed';
import Navbar from './components/Nav';
import { Box, Stack } from "@mui/material";



function App() { 
  return ( 
    <Box>  
      <Navbar /> 
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <Rightbar />
    </Stack>
    </Box>
  );
}

export default App;
