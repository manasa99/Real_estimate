/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { useState, useEffect } from "react";
import forminputCSS from "./forminput.module.css";
import { useForm } from "react-hook-form";
import Btn from "../Btn"
import axios from "axios";


const Saleform = (props) => {

  console.log("forminput", props)
  const [values, setValues] = useState({
    full_address: "",
    state: "",
    city:"",
    zip_code: "",
    house_size: "",
    bath: "",
    bed: "",
    price: "",
    acre_lot: "",
    street: ""
  });

  const inputs = [
    {
      id: 1,
      name: "full_address",
      type: "text",
      placeholder: "enter full addresss",
      errormessage: "This field is required",
      label: "Address",
      required: true,
    },
    {
      id: 2,
      name: "state",
      type: "text",
      placeholder: "state",
      errormessage: "Enter state",
      label: "State",

    },
    {
      id: 3,
      name: "city",
      type: "text",
      placeholder: "This field is required",
      label: "city",
      errormessage: "Enter city",
      required: true,
    },
    {
        id: 4,
        name: "zip_code",
        type: "text",
        placeholder: "This field is required",
        label: "zip_code",
        errormessage: "Enter zip_code",
        required: true
    },
    {
      id: 5,
      name: "house_size",
      type: "text",
      placeholder: "Enter size of the house",
      label: "house_size",
      errormessage: "This field is required",
      required: true,
    },
    {
        id: 6,
        name: "bed",
        type: "text",
        placeholder: "Enter number of beds",
        label: "Beds",
        errormessage: "This field is required",
        required: true,
    },
    {
        id: 7,
        name: "bath",
        type: "text",
        placeholder: "Enter number of bathrooms",
        label: "Baths",
        errormessage: "This field is required",
        required: true,
    },
    {
        id: 8,
        name: "price",
        type: "text",
        placeholder: "Enter your price for this house",
        label: "Price",
        errormessage: "This field is required",
        required: true,
    },
    {
      id: 9,
      name: "acre_lot",
      type: "text",
      placeholder: "Enter acre_lot",
      label: "Acre_lot",
      errormessage: "This field is required",
      required: true,
    },
    {
      id: 10,
      name: "street",
      type: "text",
      placeholder: "Enter street",
      label: "Street",
      errormessage: "This field is required",
      required: true,
    }
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };


  const[formresult, setFormresult]= useState([])
  const { addOrEdit, recordForEdit } = props
  const handleSubmit = e => {
    e.preventDefault()
    console.log("handlesubmit", values )

    axios({
      method: 'post',
      url: 'https://api.ajetavya.com/real_estimate_backend/property',
      data: values,
      validateStatus: (status) => { 
        console.log(status)
        addOrEdit(values);
      },
    }).catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
  
    });

  }   

  useEffect(() => {
      if (recordForEdit != null)
          setValues({
              ...recordForEdit
          })
        // console.log("closing form", [recordForEdit])
  }, [recordForEdit])


  return (
    <div className={forminputCSS.Saleformbody}>
      
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div className={forminputCSS.formInput}>
          <label>{input.label}</label>
          <input className={forminputCSS.inputbox}
            {...input}
            onChange={onChange}
            value={values[input.name]}
          />
          <span className={forminputCSS.span}>{input.errorMessage}</span>
        </div>
        ))}
        <Btn type="submit" text="Submit" />
        {/* <Button text="Reset" color="default" onClick={resetForm} /> */}
      </form>
    </div>
  )
}
export default Saleform;