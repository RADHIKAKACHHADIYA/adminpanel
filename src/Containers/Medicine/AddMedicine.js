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

    const handleAdd = (values) => {
        console.log(values)
        let localdata = JSON.parse(localStorage.getItem("medicine"))
        console.log(localdata)
        if (localdata === null){
            localStorage.setItem("medicine", JSON.stringify([values]))
          } else {
            localdata.push(values)
            localStorage.setItem("medicine", JSON.stringify(localdata))
          }
    };
    let AddSchema = {
        name: yup.string()
            .required("Name is must be requrired"),
        price: yup.number()
            .required("Price is must be requrired"),
        quantity: yup.number()
            .required("Quantity is must be requrired"),
        expiry: yup.number()
            .required("Expiry is must be requrired"),
    };

    let schema = yup.object().shape(AddSchema)

    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            quantity: "",
            expiry: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log("onSubmit") 
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
                            <TextField
                                margin="dense"
                                id="price"
                                label="Medicine Price"
                                type="text"
                                fullWidth
                                variant="standard"
                                {...getFieldProps("price")}
                                error={Boolean(errors.price && touched.price)}
                                helperText={(errors.price && touched.price) && errors.price}
                            />
                            <TextField
                                margin="dense"
                                id="quantity"
                                label="Medicine Quantity"
                                type="text"
                                fullWidth
                                variant="standard"
                                {...getFieldProps("quantity")}
                                error={Boolean(errors.quantity  && touched.quantity)}
                                helperText={(errors.quantity  && touched.quantity) && errors.quantity}
                            />
                            <TextField
                                margin="dense"
                                id="expiry"
                                label="Medicine Expiry"
                                type="text"
                                fullWidth
                                variant="standard"
                                {...getFieldProps("expiry")}
                                error={Boolean(errors.expiry && touched.expiry) }
                                helperText={(errors.expiry && touched.expiry) && errors.expiry}
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

export default AddMedicine;