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
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';

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
    const [dopen, setdOpen] = useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState();
    const [Edit, setEdit] = useState();

    useEffect(
        () => {
            loadData()

        },
        [])
    const loadData = () => {
        let localdata = JSON.parse(localStorage.getItem("medicine"))
        if (localdata === null) {
            localdata = orgData
            localStorage.setItem("medicine", JSON.stringify(orgData))
        } else {
            localdata = localdata
        }
        setData(localdata)
    }

    const handledelete = () => {
        console.log("handledelete")
        let localdata = JSON.parse(localStorage.getItem("medicine"))

        let filterData = localdata.filter((l) => l.id !== id)
        localStorage.setItem("medicine", JSON.stringify(filterData))

        setdOpen(filterData)
        setData(filterData)
        handleClose();
        enqueueSnackbar('Succesfully Deleted',
            {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
    }

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setdOpen(false);
    };
    const handleEdit = (id) => {
        let localdata = JSON.parse(localStorage.getItem("medicine"));

        let filterData = localdata.filter((l) => l.id === id)

        setEdit(filterData[0])
        setOpen(filterData)

    }

    return (
        <div>
            <Box>
                <Typography variant="h2" >
                    Medicine
                </Typography>
                <Box sx={{
                    float: 'right'
                }}>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Add Medicine
                    </Button>
                </Box>

                <AddMedicine openprops={open} handleClose={handleClose} loadData={loadData} Edit={Edit} />

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
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" onClick={() => handleEdit(row.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" onClick={() => { setdOpen(true); setId(row.id) }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Dialog
                    open={dopen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure want to delete?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>No</Button>
                        <Button onClick={handledelete} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </div>
    );
}

export default Medicine;