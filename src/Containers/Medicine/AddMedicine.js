import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, FormikProvider, useFormik } from "formik";
import { useSnackbar } from 'notistack';
import Medicine from './Medicine';

function AddMedicine({ openprops, handleClose, loadData, Edit }) {

    const [update, setUpdate] = useState()

    useEffect(
        () => {
            setUpdate(Edit)
        },
        [Edit])

    // console.log(Edit)

    const handleEdit = (values) => {

        let data = {
            "id" : update ? update.id : '' ,
            "name" : values.name , 
            "price" : parseInt(values.price) , 
            "qunatity" : parseInt(values.qunatity) , 
            "expiry" : parseInt(values.expiry) 
        }
        console.log(data)
        let localdata = JSON.parse(localStorage.getItem('medicine'))
        const udata = localdata.map((l) => {
            if (l.id === update.id) {
                return data 
            } else {
                return l
            }
        })
        localStorage.setItem("medicine", JSON.stringify(udata))

        
        handleClose()
        loadData()
        setUpdate()
    }


    const handleAdd = (values) => {
        let localdata = JSON.parse(localStorage.getItem("medicine"))
        let data = { ...values, "id": Math.floor(Math.random() * 100) + 1 }
        if (localdata === null) {
            localStorage.setItem("medicine", JSON.stringify([data]))
        } else {
            localdata.push(data)
            localStorage.setItem("medicine", JSON.stringify(localdata))
        }

        handleClose()
        loadData()
        enqueueSnackbar('Succesfully ad',
            {
                variant: 'info',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
    };
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    let AddSchema = {
        name: yup.string()
            .required("Name is must be requrired"),
        price: yup.number()
            .required("Price is must be requrired"),
        qunatity: yup.number()
            .required("qunatity is must be requrired"),
        expiry: yup.number()
            .required("Expiry is must be requrired"),
    };

    let schema = yup.object().shape(AddSchema)

    const formik = useFormik({
        enableReinitialize: true ,
        initialValues: {
            name: update ? update.name : "",
            price: parseInt(update ? update.price : ""),
            qunatity: parseInt(update ? update.qunatity : ""),
            expiry: parseInt(update ? update.expiry : ""),
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if(update ) {
                handleEdit(values)
            } else {
                handleAdd(values)
            }
           
        }
    });


    const { handleSubmit, errors, touched,handleChange,handleBlur, getFieldProps } = formik;


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
                                defaultValue={update ? update.name : ''}
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(errors.name && touched.name)}
                                helperText={(errors.name && touched.name) && errors.name}
                            />
                            <TextField
                                margin="dense"
                                id="price"
                                label="Medicine Price"
                                type="text"
                                fullWidth
                                variant="standard"
                                defaultValue={update ? update.price : ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(errors.price && touched.price)}
                                helperText={(errors.price && touched.price) && errors.price}
                            />
                            <TextField
                                margin="dense"
                                id="qunatity"
                                label="Medicine qunatity"
                                type="text"
                                fullWidth
                                variant="standard"
                                defaultValue={update ? update.qunatity : ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(errors.qunatity && touched.qunatity)}
                                helperText={(errors.qunatity && touched.qunatity) && errors.qunatity}
                            />
                            <TextField
                                margin="dense"
                                id="expiry"
                                label="Medicine Expiry"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={update ? update.expiry : ''}
                                error={Boolean(errors.expiry && touched.expiry)}
                                helperText={(errors.expiry && touched.expiry) && errors.expiry}
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

export default AddMedicine;