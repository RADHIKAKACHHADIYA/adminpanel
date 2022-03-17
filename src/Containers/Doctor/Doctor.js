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
import AddDoctor from './AddDoctor';
import { useDispatch, useSelector } from 'react-redux';
import Loder from '../../Components/Loder/Loder'
import { deleteDoctors, fetchDoctors } from '../../redux/action/doctor.action';

// const drData = [
//     {
//         id: 101,
//         name: 'DR. jonas'
//     },
//     {
//         id: 102,
//         name: 'Dr. Desai'
//     },
//     {
//         id: 103,
//         name: 'Dr. Bankim'
//     },
//     {
//         id: 104,
//         name: 'Dr. R. R. Ramani'
//     },
//     {
//         id: 105,
//         name: 'Dr. Rehman'
//     },
// ]
function Doctor(props) {
    const [open, setOpen] = useState(false);
    const [dopen, setdOpen] = useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState();
    const [edit, setEdit] = useState();
    const dispatch = useDispatch();
    const doctors = useSelector(state => state.doctors);

    useEffect(
        () => {
            dispatch(fetchDoctors())
        },
        [])

    const handledelete = () => {

        dispatch(deleteDoctors(id))

        handleClose();
    }

    const loadData = () => {
        let localdata = JSON.parse(localStorage.getItem("doctors"))
        if (localdata === null) {
            localdata = doctors.doctors
            localStorage.setItem("doctors", JSON.stringify(doctors.doctors))
        } else {
            localdata = localdata
        }
        setData(localdata)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setdOpen(false);
    };

    const handleEdit = (id) => {
        // let localdata = JSON.parse(localStorage.getItem("doctors"));

        let filterData = doctors.doctors.filter((d) => d.id === id)

        setEdit(filterData[0])
        setOpen(filterData)

    }

    return (
        <div>
            <Typography variant="h2" >
                doctors
            </Typography>
            <Box sx={{
                float: 'right'
            }}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add doctors
                </Button>
            </Box>

            <AddDoctor openprops={open} handleClose={handleClose} loadData={loadData} edit={edit} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>doctors Name</TableCell>
                            <TableCell align="right">Edit / Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            !doctors.isLoading ?
                                doctors.errorMsg === '' ?
                                    doctors.doctors.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
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
                                    )) : <TableRow><TableCell className='text-info'>{doctors.errorMsg}</TableCell></TableRow>
                                : <Loder message={"Please Wait"} />
                        }
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