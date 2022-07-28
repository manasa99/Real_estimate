import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))

export default function Btn(props) {

    const { text, size, color, variant, sx, onClick, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            
            size={size || "large"}
            color={color || "primary"}
            // backgroundColor= {backgroundColor || 'orange'}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>
    )
}