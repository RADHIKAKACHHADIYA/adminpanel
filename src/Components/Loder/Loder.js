import React from 'react';
import CircularProgressWithLabl from '@mui/material';

function Loder(props) {
    return (
        <div>
            <CircularProgressWithLabl value={progress} />
        </div>
    );
}

export default Loder;