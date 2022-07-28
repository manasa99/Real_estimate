// import React from 'react'
// import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// const Signup = () => {
//     const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
//     const headerStyle = { margin: 0 }
//     const avatarStyle = { backgroundColor: '#1bbd7e' }
//     const marginTop = { marginTop: 5 }
    
//     return (
//         <Grid>
//             <Paper style={paperStyle}>
//                 <Grid align='center'>
//                     <Avatar style={avatarStyle}>
//                         <AddCircleOutlineOutlinedIcon />
//                     </Avatar>
//                     <h2 style={headerStyle}>Sign Up</h2>
//                     <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
//                 </Grid>
//                 <form>
//                     <TextField fullWidth label='Name' placeholder="Enter your name" />
//                     <TextField fullWidth label='Email' placeholder="Enter your email" />
//                     <FormControl component="fieldset" style={marginTop}>
//                         <FormLabel component="legend">Gender</FormLabel>
//                         <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
//                             <FormControlLabel value="female" control={<Radio />} label="Female" />
//                             <FormControlLabel value="male" control={<Radio />} label="Male" />
//                         </RadioGroup>
//                     </FormControl>
//                     <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
//                     <TextField fullWidth label='Password' placeholder="Enter your password"/>
//                     <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
//                     <FormControlLabel
//                         control={<Checkbox name="checkedA" />}
//                         label="I accept the terms and conditions."
//                     />
//                     <Button type='submit' variant='contained' color='primary'>Sign up</Button>
//                 </form>
//             </Paper>
//         </Grid>
//     )
// }

// export default Signup;



// testing

import React, { Component, useEffect, useState } from "react";
// import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormHelperText } from '@material-ui/core'
import { Formik, Field, Form, ErrorMessage } from 'formik'
// import * as Yup from 'yup'

const Signup=({handleChange})=>{
    const btnstyle={margin:'8px 0'}
    const paperStyle={padding :20}
    const formstyle = {padding :20}
    // const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }

    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
        handleChange = "hello"
    }

    return (
        <Grid>
            <Paper style = {paperStyle} >
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {(props) => (
                        <Form style = {formstyle}>

                            <Field as={TextField} fullWidth name="name" label='Name'
                                placeholder="Enter your name" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                < Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </ Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                            <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number'
                                placeholder="Enter your phone number" helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field as={TextField} fullWidth name='password' type="password"
                                label='Password' placeholder="Enter your password"
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                label='Confirm Password' placeholder="Confirm your password"
                                helperText={<ErrorMessage name="confirmPassword" />} />
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Signup