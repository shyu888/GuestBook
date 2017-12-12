import React from 'react';
import { Link } from 'react-router';
import * as userApi from '../../api/user-api';
import _ from 'lodash';



const AddUserContainer = React.createClass({
  
  getInitialState: function () {
    return {name: "", github: "", instagram: "", twitter: "", facebook: "", worksOn: "" , loading: false, errors: {}}
  },
    
   componentDidMount: function() {
    userApi.addUser().then(user => {
      this.setState({user: user})
    });
  },  
    
    
  addUser: function(userId) {
  userApi.addUser(userId).then(users => {
      const newUsers = _.filter(this.state.users, user => user.id = userId);
      this.setState({users: newUsers})
      
        
  });
  },  
    
   
    
    
    
    
  _create: function () {
    return $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: {
        name: this.state.name,
        github: this.state.github,
        instagram: this.state.instagram,
          twitter: this.state.twitter,
          facebook: this.state.facebook,
          worksOn: this.state.worksOn
      },
      beforeSend: function () {
        this.setState({loading: true});
      }.bind(this)
    })
  },
  _onSubmit: function (e) {
    e.preventDefault();
          
        
      return;
    },
    
   
                                           
                                           
                                           
  hideLoading: function () {
    this.setState({loading: false});
  },
  _onSuccess: function (data) {
    this.refs.user_form.getDOMNode().reset();
    this.setState(this.getInitialState());
    // show success message
  },
  _onError: function (data) {
    var message = "Failed to create the user";
    var res = data.responseJSON;
    if(res.message) {
      message = data.responseJSON.message;
    }
    if(res.errors) {
      this.setState({
        errors: res.errors
      });
    }
  },
  _onChange: function (e) {
    var state = {};
    this.setState({state:e.target.value});
  },
  _validate: function () {
    var errors = {}
    if(this.state.name == "") {
      errors.name = "Name is required";
    }
    if(this.state.github == "") {
      errors.github = "Github is required";
    }
    if(this.state.instagram == "") {
      errors.instagram = "Instagram is required";
    }
   if(this.state.twitter == "") {
      errors.twitter = "Twitter is required";
    }
    if(this.state.facebook == "") {
      errors.facebook = "Facebook is required";
    }  
    if(this.state.worksOn == "") {
      errors.worksOn = "WorksOn is required";
    }   
      
    return errors;
  },
  _formGroupClass: function (field) {
    var className = "form-group ";
    if(field) {
      className += " has-error"
    }
    return className;
  },
    
    
    
    
  render: function() {
    return (
      <div className="form-container">
        <form ref='user_form' onSubmit={this._onSubmit}>
          <div className={this._formGroupClass(this.state.errors.name)}>
            <label className="control-label" for="name">Name </label>
            <input name="name" ref="name" type="text" className="form-control" id="name" placeholder="Name" onChange={this._onChange} />
            <span className="help-block">{this.state.errors.name}</span>
          </div>
          <div className={this._formGroupClass(this.state.errors.github)}>
            <label className="control-label" for="github">Github</label>
            <input name="github" ref="github" type="github" className="form-control" id="github" placeholder="github" onChange={this._onChange} />
            <span className="help-block">{this.state.errors.github}</span>
          </div>
          <div className={this._formGroupClass(this.state.errors.instagram)}>
            <label className="control-label" for="instagram">Instagram</label>
            <input name="instagram" ref="instagram" type="instagram" className="form-control" id="instagram" placeholder="instagram" onChange={this._onChange} />
            <span className="help-block">{this.state.errors.instagram}</span>
          </div>
            
          <div className={this._formGroupClass(this.state.errors.twitter)}>
            <label className="control-label" for="twitter">Twitter</label>
            <input name="twitter" ref="twitter" type="twitter" className="form-control" id="twitter" placeholder="twitter" onChange={this._onChange} />
            <span className="help-block">{this.state.errors.twitter}</span>
          </div>  
            
          <div className={this._formGroupClass(this.state.errors.facebook)}>
            <label className="control-label" for="facebook">Facebook</label>
            <input name="facebook" ref="facebook" type="facebook" className="form-control" id="facebook" placeholder="facebook" onChange={this._onChange} />
            <span className="help-block">{this.state.errors.facebook}</span>
          </div>    
            
        <div className={this._formGroupClass(this.state.errors.worksOn)}>
            <label className="control-label" for="worksOn">WorksOn</label>
            <input name="worksOn" ref="worksOn" type="worksOn" className="form-control" id="worksOn" placeholder="worksOn" onChange={this._onChange} />
            <span className="help-block">{this.state.errors.worksOn}</span>
          </div>    
                
            
            
            
          <button type="submit" className="btn btn-default" onClick={this.addUser} disabled={this.state.loading}>
            Create
            
          </button>
        </form>
      </div>
    );
  }
});

export default AddUserContainer;