import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import React, {Component} from "react";

export default class Topbar extends Component{

  constructor(props){
    super(props)
    console.log(props)
    this.state=props.values;
    console.log(this.state)
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  handleKeyPress=(e)=>{
    if (e.key === 'Enter') {
      // this.setState({
      //   [e.target.name]: e.target.value,
      //   bed:'',
      //   bath:''
      // })
      console.log("location",e.target.value)
      this.props.handleKeyPressloc({
        [e.target.name]: e.target.value,
        bed:'',
        bath:''
      });
    }
    
  }

  // handleSubmit = (e)=>{
  //   e.preventDefault()  
  //   this.props.handleValues(this.state);

  //   //  return (this.state);
  // }

  render(){
    const {location} = this.state
    return (
      <div className="searchbar">
            <Search className="searchIcon" />
            <input
              type= "text"
              name="city"
              placeholder="Search by location"
              className="searchInput"
              value={location}
              onKeyPress={this.handleKeyPress}
            />
          </div>
    );
}
}

{/* <div className="topbarContainer">
        <div className="topbarCenter"> */}
          