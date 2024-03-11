import { Alert, Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function Example() {
    const [click, setClick] = useState(0);

    function onClick() {
        setClick(click + 1);
    }
    return (
        <Container style={{ height:'100%', display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} maxWidth="sm">
            
            <Box display={'flex'} padding={'20px'} flexDirection={"column"} sx={{ border: '2px solid grey' }}>
                <Typography textAlign="center" variant='h1'>Exemplo</Typography>
                <Typography textAlign="center" variant='p'>Exemplo da biblioteca MUI sendo utilizada no Laravel 10</Typography>
                <Typography mt={'10px'} mb={"10px"} textAlign="center" variant='p'>Quantidade de clicks: {click}</Typography>

                <Button onClick={onClick} variant='contained'>Clica aqui</Button>
            </Box>
        </Container>
    );
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
