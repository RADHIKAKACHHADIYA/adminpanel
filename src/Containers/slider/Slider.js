import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Button, DialogContent } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { addSlider, deleteSlider, fetchSlider } from '../../redux/action/slider.action';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Paper , Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';


function Slider(props) {
    const [open, setOpen] = useState(false);
    const [imgData, setImgData] = useState();

    const dispatch = useDispatch();
    const slider = useSelector(state => state.slider)
    console.log(slider)

    useEffect(
        () => {
            dispatch(fetchSlider())
        },
    [])

    const handleUpload = () => {
        dispatch(addSlider(imgData))
        handleClose()
    }
    
    const handleDelete = () => {
        // dispatch(deleteSlider())
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Box sx={{
                textAlign: 'center'
            }}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add slider
                </Button>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mt: 5 }}>
                    <TableContainer>
                        <Table sx={{ minWidth: 750 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Slider_img</TableCell>
                                    <TableCell align="left">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    slider.slider !== undefined &&
                                    slider.slider.map((m, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">
                                                <img  src={m.slider} width={100}   />
                                                {/* {m.slider} */}
                                            </TableCell>
                                            <TableCell>
                                                <IconButton aria-label="delete" onClick={() => handleDelete(m.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                            {/* <TableCell>
                                                <Switch checked={m.status} onChange={(e) => { handleEditSwitch(m); setChecked(e.target.value) }} />
                                            </TableCell> */}
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className='bg-dark mb-4 text-white'>
                    Add your slider images here
                </DialogTitle>
                <DialogContent id="alert-dialog-title">
                    <TextField
                        type='file'
                        id="outlined-basic"
                        variant="outlined"
                        onChange={(e) => setImgData(e.target.files[0])}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleUpload} autoFocus>
                        Upload
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Slider;