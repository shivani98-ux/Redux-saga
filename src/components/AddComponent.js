import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import {addUsers} from '../redux/actions/add';
class AddComponent extends Component {
   state={
       id:'',
       userId:'',
       title:'',
       body:''
   }
    handleTextChange = event => {
        const {target: {name, value}} = event;
        this.setState({[name]: value });
    }

   handleOnSubmit = event => {
       event.preventDefault();
       this.props.addUsers(this.state);
       this.setState({
           id: '',
           userId:'',
            title:'',
            body:''

       });
   }
   render(){
       return(
           <div className="card-body">
               <div className="form-container">
                   <form onSubmit={this.handleOnSubmit}>
                       <div className="form-group">
                           <label>ID:</label>{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.id} name="id" types="text" className="form-control" placeholder="ID" required/>
                       </div>
                       <div className="form-group">
                           <label>User_ID:</label>{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.userId} name="userId" types="text" className="form-control" placeholder="User_Id" required/>
                       </div>
                       <div className="form-group">
                           <label>Title:</label>{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.title} name="title" types="text" className="form-control" placeholder="Title" required/>
                       </div>
                       <div className="form-group">
                           <label>Body:</label>{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.body} name="body" types="text" className="form-control" placeholder="Body" required/>
                       </div>
                       <div className="form-group">
                           <button className="btn btn-success" type="submit">Add User</button>
                       </div>
                   </form>
               </div>
           </div>
       )
   }}
   export default connect(null, {addUsers})(AddComponent);
  
