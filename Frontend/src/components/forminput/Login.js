import React, { Component, useEffect, useState } from "react";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { StarHalfRounded } from "@material-ui/icons";

const Login=(propers)=>{

  const { closeform, handleChange } = propers
    const paperStyle={padding :20,height:'73vh'}
    const formstyle = {padding :20}
    // const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    
    const initialValues = {
      username: '',
      password: '',
      remember: false
  }

  const onSubmit = (values, props) => {
    console.log(values,props)
    closeform(values)
    setTimeout(() => {
        props.resetForm()
        props.setSubmitting(false)
    }, 2000)

  }
  return (
    <Grid>
        <Paper style = {paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                <h2>Login</h2>
            </Grid>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(props) => (
                    <Form  style= {formstyle}>
                        <Field as={TextField} label='Username' name="username"
                            placeholder='Enter username' fullWidth required
                            helperText={<ErrorMessage name="username" />}
                        />
                        <Field as={TextField} label='Password' name="password"
                            placeholder='Enter password' type='password' fullWidth required
                            helperText={<ErrorMessage name="password" />} />
                        <Field as={FormControlLabel}
                            name='remember'
                            control={
                                <Checkbox
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                            style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Login"}</Button>

                    </Form>
                )}
            </Formik>
            <Typography >
                <Link href="#" >
                    Forgot password ?
            </Link>
            </Typography>
            <Typography > Do you have an account ?
                 <Link href="#" onClick={() => handleChange("event", 1)} >
                    Sign Up
            </Link>
            </Typography>
        </Paper>
    </Grid>
)
}

export default Login