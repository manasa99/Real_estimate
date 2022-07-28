import React, { Component, useEffect, useRef, useState } from "react";

import "./card.css"
import { baseUrl }  from "../../utils/fetchApi"
import axios from "axios"
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
// import * as employeeService from "../../services/employeeService";
import Popup from "../Popup";
import useTable from "../useTable";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Forminput from "../forminput/Forminput";
import Control from "../Control";
import { Box, Card, CardContent, Typography, CardActions,  Button, ListItem, } from "@material-ui/core";
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';

export default function SingleCards(item_contents){
    

    // console.log("item_contents",item_contents)
    const mapping = {
        id:"id",
        one:"price",
        two:"house_size",
        three_one:"bed",
        three_two:"bath",
        four: "full_address",   
        five: "acre_lot",
        one_content:"Price (in USD):",
        show_card_actions:[{
            name:"",
            type:"",
            method:"",
            url:"",
            data:"self"
        }],

        }
    // useEffect(() => { setItem(item_contents) }, [])
    const [recordForEdit, setRecordForEdit] = useState(null)
    
    const [openPopup, setOpenPopup] = useState(false)

    // const handleCardClick = (item) => {
    //     console.log( "clicked card in edit" , item);
    //     openInPopup(item)
    //     setOpenPopup(true)
    // }
    const addOrEdit = (item, resetForm) => {
        // item.preventDefault();
        setRecordForEdit(null)
        setOpenPopup(false)
        console.log("edited card", item)

    }

    const onclickdelete = (id)=>{
        console.log(id)
        axios({
          method: 'delete',
          url: 'https://api.ajetavya.com/real_estimate_backend/property?id='+id,
          validateStatus: (status) => { 
            console.log(status)
          },
        }).catch(error => {
            console.log(error);
            
        }).then(response => {
            console.log(response);
        });
    
    }
    const openInPopup = item => {
        console.log( "clicked card is " , item);
        setRecordForEdit(item)
        setOpenPopup(true)
    }
    return(
        <div>
            <div className = "card" >
                <img src="https://source.unsplash.com/WLxQvbMyfas"  className ="image" alt=""/>
                <div className="content">
                    <span className ="one"> {mapping.one_content} : ${item_contents[mapping.one]}</span>
                    <span className ="two">{mapping.two} : {item_contents[mapping.two]}</span>
                    <span className ="three">{mapping.three_one} : {item_contents[mapping.three_one]}- {mapping.three_two}  {item_contents[mapping.three_two]}</span>
                    <span className ="four">{mapping.five} : {item_contents[mapping.five]}</span>
                    <span className ="four">{mapping.four} : {item_contents[mapping.four]}</span>

                </div>
                <TableCell>
                    <Control color="primary" onClick={() => {openInPopup(item_contents)}}>
                        <EditOutlinedIcon fontSize="small" /> 
                    </Control>
                    <Control color="secondary" onClick={()=>{onclickdelete(item_contents.id)}}>
                        <CloseIcon fontSize="small" />
                    </Control>
                </TableCell>
            </div>
            <Popup
                title = "Your Property"
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
                <Forminput
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}/>
            </Popup>
        </div>
    );
}