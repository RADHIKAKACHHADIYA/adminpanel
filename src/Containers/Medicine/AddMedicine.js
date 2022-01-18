import React from 'react';
import * as yup from "yup";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, FormikProvider, useFormik } from "formik";

function AddMedicine({ openprops, handleClose }) {

    
    let AddSchema = {
        name: yup.string()
            .required("Name is must be requrired"),
        price: yup.string()
            .required("Price is must be requrired"),
        // .positive("invalid number"),
        quantity: yup.string()
            .required("Quantity is must be requrired"),
        expiry: yup.string()
            .required("Expiry is must be requrired")
            .min(4, "Password is must 4 character long"),
    };

    let schema = yup.object().shape(AddSchema)

    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            quantity: "",
            expiry: "",
        },
    });

    const { handleSubmit, errors, getFieldProps } = formik;


    return (
        <div>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}                  > 
                    <Dialog open={openprops} onClose={handleClose}>
                        <DialogTitle>Add Medicine</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                local storage
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Medicine Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                {...getFieldProps("name")}
                                errors={Boolean(errors.name)}
                                errorMessage={errors.name}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="price"
                                label="Medicine Price"
                                type="text"
                                fullWidth
                                variant="standard"
                                {...getFieldProps("price")}
                                errors={Boolean(errors.price)}
                                errorMessage={errors.price}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="quantity"
                                label="Medicine Quantity"
                                type="text"
                                fullWidth
                                variant="standard"
                                {...getFieldProps("quantity")}
                                errors={Boolean(errors.quantity)}
                                errorMessage={errors.quantity}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="expiry"
                                label="Medicine Expiry"
                                type="text"
                                fullWidth
                                variant="standard"
                                {...getFieldProps("expiry")}
                                errors={Boolean(errors.expiry)}
                                errorMessage={errors.expiry}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Submit</Button>
                        </DialogActions>
                    </Dialog>
                </Form>
            </FormikProvider>
        </div>
    );
}

export default AddMedicine;