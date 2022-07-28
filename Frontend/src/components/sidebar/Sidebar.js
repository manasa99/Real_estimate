import "./sidebar.css";
import {useEffect, useState} from "react";
import React, {Component} from "react";
// import Card from "../../components/Card/Card";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
// import { Users } from "../../dummyData";


class Sidebar extends Component{

    constructor(props){
      super(props)
      console.log("sidebar from search",props)

      this.state=props.values;
      console.log(this.state)
      // this.props.handleValues(this.state)
    }
    handleChange=(e)=>{
      this.setState({
        [e.target.name]: e.target.value
      })    
      
    }
    handleSubmit = (e)=>{
      e.preventDefault()  
      this.props.handleValues(this.state);

      //  return (this.state);
    }
    render() {
      const {city, bed, bath} = this.state
      return (
          <div className="sidebar">
              <form onSubmit={this.handleSubmit}>
                <h3>Search by filters</h3>
              <div className="sidebarListItemText">City: 
              <input className="sidebarinput" type='text' name ='city' placeholder="Enter city" onChange={this.handleChange} value={city}></input>
              </div>
              <div className="sidebarListItemText">Bed: 
              <input className="sidebarinput" type='number' name ='bed' placeholder="Enter no.of Beds (0-4)" onChange={this.handleChange} value={bed}></input>
              </div>
              <div className="sidebarListItemText">Bath: 
              <input className="sidebarinput" type='number' name ='bath' placeholder="Enter no.of Baths (0-4)" onChange={this.handleChange} value={bath}></input>
              </div>
              <button className="submit" type='submit'>Submit Now</button>
              </form>
          </div>
          
      )
  }

}

export default Sidebar


