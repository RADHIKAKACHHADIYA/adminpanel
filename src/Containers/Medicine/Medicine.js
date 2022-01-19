import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import AddMedicine from './AddMedicine';


  
  const orgData = [
    {
    id: 101,
    name: 'Abacavir',
    qunatity: 25,
    price: 150,
    expiry: 2022
    },
    {
    id: 102,
    name: 'Eltrombopag',
    qunatity: 90,
    price: 550,
    expiry: 2021
    },
    {
    id: 103,
    name: 'Meloxicam',
    qunatity: 85,
    price: 450,
    expiry: 2025
    },
    {
    id: 104,
    name: 'Allopurinol',
    qunatity: 50, 
    price: 600, 
    expiry: 2023 
    },
    {    
    id: 105,    
    name: 'Phenytoin',   
    qunatity: 63,    
    price: 250,  
    expiry: 2021
    },
    ]
function Medicine(props) {
    const [open, setOpen] = useState(false);
    const [data , setData] = useState([]);

    useEffect (
        () => {
            loadData()

        },
    [])
    const loadData = () => {
        let localdata = JSON.parse(localStorage.getItem("medicine"))
        if(localdata === null) {
            setData(orgData)
        } else {
            setData(localdata)
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box>
                <Typography variant="h2" >
                    Medicine
                </Typography>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Medicine
                </Button>
                <AddMedicine openprops={open} handleClose={handleClose} loadData={loadData} />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Madicine Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">qunatity</TableCell>
                                <TableCell align="right">Expiry</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.qunatity}</TableCell>
                                    <TableCell align="right">{row.expiry}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
}

export default Medicine;