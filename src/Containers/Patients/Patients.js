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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import AddPatient from './AddPatient';
import { fatchPatient } from '../../redux/action/patient.action';

function Patients() {
    const [open, setOpen] = useState(false);
    const [dopen, setdOpen] = useState(false);
    const [id, setId] = useState();
    const [data , setData] = useState();
    const [edit, setEdit] = useState();
    const dispatch = useDispatch();
    const patients = useSelector(state => state.patients);

    useEffect(
        () => {
            dispatch(fatchPatient())
        },
        [])

    const handledelete = () => {
        handleClose();
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setdOpen(false);
    };

    const handleEdit = (id) => {
        let filterData = patients.patients.filter((d) => d.id === id)
        setEdit(filterData[0])
        setOpen(filterData)

    }
    console.log(data)
    return (
        <div>
            <Typography variant="h2" >
                patients
            </Typography>
            <Box sx={{
                float: 'right'
            }}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add patients
                </Button>
            </Box>

            <AddPatient openprops={open} handleClose={handleClose} edit={edit} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>patients Name</TableCell>
                            <TableCell> Age</TableCell>
                            <TableCell> Phone number</TableCell>
                            <TableCell>Appointment Date</TableCell>
                            <TableCell> city</TableCell>
                            <TableCell align="right">Edit / Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {
                             data.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.age}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.number}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.date}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.city}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" className='text-primary' onClick={() => handleEdit(row.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" onClick={() => { setdOpen(true); setId(row.id) }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        } */}
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

export default Patients;