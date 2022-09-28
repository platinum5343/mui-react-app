import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { theme } from "./theme"


const root = ReactDOM.render(<App />, document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
    </React.StrictMode>,
)
;
