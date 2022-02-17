import React from 'react';
import * as yup from 'yup';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, FormikProvider, useFormik } from "formik";

function addDoctor({ openprops, handleClose, loadData }) {

    const handleAdd = (values) => {
        let localdata = JSON.parse(localStorage.getItem("medicine"))
        let data = {...values , "id" : Math.floor(Math.random() * 100) + 1}
        if (localdata === null) {
            localStorage.setItem("medicine", JSON.stringify([data]))
        } else {
            localdata.push(data)
            localStorage.setItem("medicine", JSON.stringify(localdata))
        }

        handleClose()
        loadData()
    };
    let AddSchema = {
        name: yup.string()
            .required("Name is must be requrired"),
    };

    let schema = yup.object().shape(AddSchema)

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            handleAdd(values)
        }
    });

    const { handleSubmit, errors, touched, getFieldProps } = formik;
    
    return (
        <div>

            <Dialog open={openprops} onClose={handleClose}>
                <FormikProvider value={formik}>
                    <Form onSubmit={handleSubmit}>
                        <DialogTitle>Add Medicine</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                local storage
                            </DialogContentText>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Medicine Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                {...getFieldProps("name")}
                                error={Boolean(errors.name && touched.name)}
                                helperText={(errors.name && touched.name) && errors.name}
                            />
                           
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </Form>
                </FormikProvider>
            </Dialog>

        </div>
    );
}

export default addDoctor;