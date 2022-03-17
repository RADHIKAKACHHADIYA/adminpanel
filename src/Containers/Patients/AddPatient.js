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

function AddPatient({ openprops, handleClose, edit }) {
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
    
            // dispatch(editpatients(data));
    
            handleClose()
            setUpdate()
        }

    const handleAdd = (values) => {
        let data = {  
            "id": Math.floor(Math.random() * 10),
            "name" : values.name,
        }
        // dispatch(addpatients(data))

        handleClose()
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
                    <DialogTitle>Add Patients</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            SERVER
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="name"
                            label="patirnt Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={update ? update.name : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(errors.name && touched.name)}
                            helperText={(errors.name && touched.name) && errors.name}
                        />
                        <TextField
                            margin="dense"
                            id="age"
                            label="patirnt age"
                            type="number"
                            fullWidth
                            variant="standard"
                            defaultValue={update ? update.age : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(errors.age && touched.age)}
                            helperText={(errors.age && touched.age) && errors.age}
                        />
                        <TextField
                            margin="dense"
                            id="number"
                            label="phone number"
                            type="tel"
                            fullWidth
                            variant="standard"
                            defaultValue={update ? update.number : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(errors.number && touched.number)}
                            helperText={(errors.number && touched.number) && errors.number}
                        />
                        <TextField
                            margin="dense"
                            id="date"
                            type="date"
                            fullWidth
                            variant="standard"
                            defaultValue={update ? update.date : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(errors.date && touched.date)}
                            helperText={(errors.date && touched.date) && errors.date}
                        />
                        <TextField
                            margin="dense"
                            id="city"
                            label="Your city name"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={update ? update.city : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(errors.city && touched.city)}
                            helperText={(errors.city && touched.city) && errors.city}
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

export default AddPatient;