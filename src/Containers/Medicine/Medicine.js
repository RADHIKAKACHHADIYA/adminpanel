import React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import AddMedicine from './AddMedicine';


function Medicine(props) {
    const [open, setOpen] = React.useState(false);

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
                <AddMedicine openprops={open} handleClose={handleClose} />
                
            </Box>
        </div>
    );
}

export default Medicine;