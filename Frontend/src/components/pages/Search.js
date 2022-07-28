// import React from 'react';
// import '../../App.css';

// export default function Search() {
//   return <h1 className='services'>SEARCH</h1>;
// }

import React, { Component, useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AllCards from"../../components/Card/AllCards"
import "./search.css"




export default function Search()  {  

    let[location,setlocation]=useState('Southwick')

    const changelocation = changedlocation=>{
        setlocation(changedlocation)
    }
    
    
    let [values,setValues]=useState(
        {
            city:'',
            bed:'',
            bath:''
        });

    const changeValues = valuesNew =>{ setValues(valuesNew);}
    
    return(
        <div className="search">
            <Topbar className="topbar" values={values} handleKeyPressloc={changeValues} />
            <div className="searchContainer">
                <Sidebar values={values} handleValues={changeValues} />
                <section > 
                    <AllCards values={values}/>
                </section>
                
            </div>
            {/* <SingleCard.Plot/> */}
        </div>
    );
} 
