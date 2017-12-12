import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
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
      
      
     
             
        onSubmit: function (e)  {
          
           e.preventDefault();
        
        var name = document.getElementById('name');
        var twitter = document.getElementById('twitter');
        
      axios.post('http://localhost:3000/users', {
        userId: '9',
        name: name,
        twitter: twitter
    })
              
          .then(function(res) {
           console.log("success", response.data["name", "twitter"])
          })
              .catch(function (error) {
                console.log("failure:", error);
                   
     });
      },
    
      
      
      render: function() {
        return (
       <div className="form-container">
        <form ref='user_form' id="user_form" onSubmit={this.onSubmit}>
          <div className="formGroupClass">
            <label className="control-label" for="name">Name </label>
            <input name="name" ref="name" type="text" className="form-control" id="name" placeholder="Name" onChange={this._handleName} />
            <span className="help-block">{this.state.errors.name}</span>
            
          </div>
          <div className="formGroupClass">
            <label className="control-label" for="twitter">Twitter</label>
            <input name="twitter" ref="twitter" type="twitter" className="form-control" id="twitter"
            placeholder="twitter" onChange={this._handleTwitter} />
            <span className="help-block">{this.state.errors.twitter}</span>
            
          </div>
            
       <input type="submit" className="btn btn-primary float-right" value="Submit" />     
           
         <button className="btn btn-link float-left" onClick={this.handleClearform}>Clear form</button> 
            
            </form>
         </div>
       )
      }
});

export default AddUserForm;
