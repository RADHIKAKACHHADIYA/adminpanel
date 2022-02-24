import React from 'react';
import * as yup from 'yup';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, FormikProvider, useFormik } from 'formik';
import { addDoctors, editDoctors } from '../../redux/action/doctor.action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

function AddDoctor({ openprops, handleClose, loadData , edit }) {

    const [update, setUpdate] = useState()
    const dispatch = useDispatch();

    useEffect(
        () => {
            setUpdate(edit)
        },
        [edit])

        const handleEdit = (values) => {

            let data = {
                "id": update ? update.id : '',
                "name": values.name,
            }
            console.log(data)
    
            dispatch(editDoctors(data));
    
            handleClose()
            loadData()
            setUpdate()
        }

    const handleAdd = (values) => {
        let data = {  
            "id": Math.floor(Math.random() * 10),
            "name" : values.name,
        }
        dispatch(addDoctors(data))

        handleClose()
        loadData()
    };

    let AddSchema = {
        name: yup.string()
            .required("Name is must be requrired"),
    };

    let schema = yup.object().shape(AddSchema)

    const formik = useFormik({
        enableReinitialize : true,
        initialValues: {
            name: update ? update.name : "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (update) {
                handleEdit(values)
            } else {
                handleAdd(values)
            }
        }
    });

    const { handleSubmit, errors, touched,  handleChange, handleBlur} = formik;
    
    return (
        <div>

            <Dialog open={openprops} onClose={handleClose}  edit={edit}>
                <FormikProvider value={formik}>
                    <Form onSubmit={handleSubmit}>
                        <DialogTitle>Add Doctor</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                SERVER
                            </DialogContentText>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Medicine Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                defaultValue={update ? update.name : ''}
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(errors.name && touched.name)}
                                helperText={(errors.name && touched.name) && errors.name}
                            />
                           
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">
                                {update ? "Update" : "Add"}
                            </Button>
                        </DialogActions>
                    </Form>
                </FormikProvider>
            </Dialog>

        </div>
    );
}

export default AddDoctor;

// import React from 'react';

// function addDoctor(props) {
//     return (
//         <div>
//             <h1>ytgvt7g </h1>
//         </div>
//     );
// }

// export default addDoctor;