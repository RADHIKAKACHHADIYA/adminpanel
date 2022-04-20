import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { addSlider } from '../../redux/action/slider.action';

function Slider(props) {
    const [open, setOpen] = useState(true);
    const [data , setData] = useState();

    const handleUpload = () => {
        dispatch(addSlider(data))
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
                    Add Medicine
                </Button>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <input type='file' onChange={setData(e.target.files)}/>
                </DialogTitle>
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