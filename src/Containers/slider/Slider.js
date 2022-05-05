import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Button, DialogContent } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { addSlider, deleteSlider, fetchSlider, updateSlider } from '../../redux/action/slider.action';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';


function Slider(props) {
    const [open, setOpen] = useState(false);
    const [fileData, setFileData] = useState()
    const [oldData, setOldData] = useState()
    const [update, SetUpdate] = useState(false)
    const [id, setId] = useState(false)
    const [name, setName] = useState(false)

    const dispatch = useDispatch();
    const slider = useSelector(state => state.slider)
    console.log(slider.slider)

    useEffect(
        () => {
            dispatch(fetchSlider())
        },
        [])

    const handleUpload = () => {
        dispatch(addSlider(fileData))
        handleClose()
    }

    const handleDelete = (name , id) => {
        console.log(name , id)
        dispatch(deleteSlider(name , id))
        setOpen(false)

    }
    

    const handleEdit = (oldData) => {
        console.log(oldData)
        setOpen(true);
        setOldData(oldData)
        SetUpdate(true)
    }

    const handleUpdetadata = () => {
        dispatch(updateSlider(oldData, fileData))
        console.log(oldData, fileData , "0rttyer")
        SetUpdate(false)
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    console.log(slider.slider);

    return (
        <div>
            <Box sx={{
                textAlign: 'center'
            }}>
                <Button variant="outlined" onClick={() => handleClickOpen()}>
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
                                    slider.slider.length > 0 &&
                                    slider.slider.map((data, i) => {
                                        console.log(data.id);
                                      return (
                                        <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">
                                            <img src={data.slider} width={100} />
                                            {/* {m.slider} */}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete" onClick={() => handleDelete(data.name , data.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton onClick={() => { handleEdit(data); }} >
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                      )
                                      })
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
                        onChange={(e) => setFileData(e.target.files[0])}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    {
                        update ? 
                            <Button onClick={() => handleUpdetadata()} variant="contained bg-dark text-light" autoFocus>
                                UPDATE
                            </Button>
                        : 
                            <Button onClick={() => handleUpload()} variant="contained bg-dark text-light" autoFocus>
                                ADD
                            </Button>
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Slider;