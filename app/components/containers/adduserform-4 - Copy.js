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
       
        var userForm = $('#user-form');
        var jsonData = function(form){
        var arrData = form.serializeArray(),
        objData = {};
      $each( arrData, function(index, elem) {
        objData[elem.name] = elem.value;
    });
    return JSON.stringify(objData);
                                          
    };  
           
          
        e.preventDefault;
          
         $.ajax({
        url: 'http://localhost:3000/users',
        method: 'POST',
        data: userForm.serialize(),
        crossDomain: true,
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader( 'Authorization', 'No Auth' );
           this.setState({loading: true}); 
        },
        success: function( data ) {
            console.log( data );
        },
       error: function(error) {
           console.log( error );
       }     
          
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
