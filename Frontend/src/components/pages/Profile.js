import React, { Component, useEffect, useState } from "react";
// import "./home.css"
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
// import Button from "../../components/Button"
import Btn from "../Btn"

import Forminput from "../forminput/Forminput";


export default function Profile(){
  

  const [openPopup, setOpenPopup] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null)

  const addOrEdit = () => {
    setRecordForEdit(null)
    setOpenPopup(false)
  }
  // eslint-disable-next-line no-unused-expressions
  <Btn type="submit" text="Submit" />

  return(
    // <Forminput/>
    <React.Fragment>
      <div className="homeContainer" >
        {/* <button onClick={ () => setOpenPopup(true) }>Sell a property</button> */}
        <video src='/videos/Houses.mp4' autoPlay loop muted />

        <h1>FIND YOUR PLACE</h1>
        <p>have a property to sell?</p>

        <Btn 
        type="" 
        text="Add your Property" 
        startIcon={<AddIcon />} 
        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}/>
      </div>
      <Popup
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
      >
        <Forminput 
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
        />
      </Popup>
    </React.Fragment>
  );
}