import React, { useState } from 'react'
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import Login from './Login'
import Signup from './Signup'
import { Dialog, DialogTitle, DialogContent, makeStyles, Paper, Tabs, Tab, Typography, Box } from '@material-ui/core';
// import Controls from "./controls/Controls";
import CloseIcon from '@material-ui/icons/Close';



export default function Signinout(props) {
  
    const { title, children, openPopup, setOpenPopup, userset } = props;
    
    console.log(props)
    const [value,setValue]=useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log("helloa", newValue)
      };

      const paperStyle={width:340}
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

    const closeform = () => {
        userset() 
        setOpenPopup(false)
    }

    return (
        <Dialog open={openPopup} dividers >
                  <Paper elevation={20}  style={paperStyle} >
                  <control
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </control>
                  <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                  >
                    <Tab label="Log In" />
                  
                    <Tab label="Sign Up" />
                  </Tabs>
                  <TabPanel value={value} index={0}>
                <Login handleChange={handleChange}
                closeform = {closeform}
                
              />
                </TabPanel>
                <TabPanel value={value} index={1}>
                <Signup/>
                </TabPanel>
                </Paper>
        </Dialog>
    )
}