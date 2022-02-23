import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';
import AddDoctor from './AddDoctor';

const drData = [
    {
        id: 101,
        name: 'DR. jonas'
    },
    {
        id: 102,
        name: 'Dr. Desai'
    },
    {
        id: 103,
        name: 'Dr. Bankim'
    },
    {
        id: 104,
        name: 'Dr. R. R. Ramani'
    },
    {
        id: 105,
        name: 'Dr. Rehman'
    },
]
function Doctor(props) {
    const [open, setOpen] = useState(false);
    const [dopen, setdOpen] = useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState();

    useEffect(
        () => {
            loadData()

        },
        [])
    const loadData = () => {
        let localdata = JSON.parse(localStorage.getItem("medicine"))
        if (localdata === null) {
            localdata = drData
            localStorage.setItem("medicine", JSON.stringify(drData))
        } else {
            localdata = localdata
        }
        setData(localdata)
    }

    const handledelete = () => {
        // console.log("handledelete")
        let localdata = JSON.parse(localStorage.getItem("medicine"))

        let filterData = localdata.filter((l) => l.id !== id)
        localStorage.setItem("medicine", JSON.stringify(filterData))

        setdOpen(filterData)
        setData(filterData)
        handleClose();
        enqueueSnackbar('Succesfully Deleted' ,
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

    return (
        <div>
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

                <AddDoctor openprops={open} handleClose={handleClose} loadData={loadData} />
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
                                        <IconButton aria-label="delete" onClick={() => {setdOpen(true) ; setId(row.id)}}>
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
        </div>
    );
}

export default Doctor;