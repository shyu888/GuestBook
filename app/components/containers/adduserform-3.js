import React, { Component } from 'react';
import { Link } from 'react-router';

import * as userApi from '../../api/user-api';
import _ from 'lodash';

    const AddUserForm = React.createClass({
      getInitialState: function () {
          return {
        
          name: "",
          twitter: "",
          loading: false, 
          errors: {}
          
          };
          
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
      },
              
      
        componentDidMount() {
       
       userApi.addUser()
           .then(data => {
           
           this.setState({
               name: data.name,               
               twitter: data.twitter
               
           });
       });
       
   },
        
        

      _handleName : function (e) {
        var state = {};  
       this.setState({name:e.target.value});
      },

      _handleTwitter: function (e) {
        var state = {};
        this.setState({twitter:e.target.value});
      },
     
      
      handleClearForm: function (e) {
       e.preventDefault();
          this.setState({
              name: '',
              twitter: ''
                       
          });
                         
      },
      
      
     
      
      
      userForm: function (e)  {
           
           
         data: {
            name: e.target.value;            
            twitter: e.target.value
           
      }    
        return userApi.addUser({data})
          .then(function(res) {
           console.log('success');
              console.log(res);
                            
          });
                   
     },
    
      
      
      render: function() {
        return (
       <div className="form-container">
        <form name="user-form" id="user-form" onSubmit={this.userForm}>
            
          <div className="formGroupClass">
            <label for="name">Name </label>
            <input type="text" name="name" id="name"  placeholder="Name" onChange={this._handleName} />
             </div>
            
          <div className="formGroupClass">
        <label for="twitter">Twitter</label>
            <input type="twitter" name="twitter" id="twitter" placeholder="twitter" onChange={this._handleTwitter} />
             </div>
            
       <input type="submit" className="btn btn-primary float-right" name="submit"  value="Submit" />     
           
         <button className="btn btn-link float-left" onClick={this.handleClearform}>Clear form</button> 
            
            </form>
         </div>
       )
      }
});

export default AddUserForm;
