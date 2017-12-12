import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import * as userApi from '../../api/user-api';

    const AddUserForm = React.createClass({
      getInitialState: function () {
          return {
        
          name: "",
          twitter: ""};
          
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
      },
              
              

      _handleName : function (e) {
       this.setState({name:e.target.value});
      },

      _handleTwitter: function (e) {
        
        this.setState({twitter:e.target.value});
      },
     
      
      handleClearForm: function (e) {
       e.preventDefault();
          this.setState({
              name: '',
              twitter: ''
                       
          });
                         
      },
      
      
     
      
      
      onSubmit: function (e)  {
          e.preventDefault();
           const user = {
            
        name: e.target.value,               
        twitter: e.target.value
       
      }
          
          
          userApi.addUser({user})
          .then(function(res) {
           console.log('success');
              console.log(res);
                            
          });
                   
      },
    
      
      
      render: function() {
        return (
       <div className="form-container">
        <form ref='user_form' onSubmit={this.onSubmit}>
          <div className="formGroupClass">
            <label className="control-label" for="name">Name </label>
            <input name="name" ref="name" type="text" className="form-control" id="name" placeholder="Name" onChange={this._handleName} />
            
          </div>
          <div className="formGroupClass">
            <label className="control-label" for="twitter">Twitter</label>
            <input name="twitter" ref="twitter" type="twitter" className="form-control" placeholder="twitter" onChange={this._handleTwitter} />
            
          </div>
            
       <input type="submit" className="btn btn-primary float-right" value="Submit" />     
           
         <button className="btn btn-link float-left" onClick={this.handleClearform}>Clear form</button> 
            
            </form>
         </div>
       )
      }
});

export default AddUserForm;
