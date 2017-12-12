import React from 'react';
import { Link } from 'react-router';
import * as userApi from '../../api/user-api';
import _ from 'lodash';



const AddUserContainer = React.createClass({
  
  getInitialState: function () {
    return {name: "", github: "", instagram: "", twitter: "", facebook: "", worksOn: "" , loading: false, errors: {}};
      this.onSubmit = this.handleSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      
  },
    
   componentDidMount() {
       
       userApi.addUser()
           .then(data => {
           
           this.setState({
               name: data.name,
               github: data.github,
               instagram: data.instagram,
               twitter: data.twitter,
               facebook: data.facebook,
               worksOn: data.worksOn
           });
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
 handleSubmit: function (e) {
    
    e.preventDefault();
     const user = {
   
            name: e.target.value,
            github: e.target.value,
            instagram: e.target.value,
            twitter: e.target.value,
            facebook: e.target.value,
            worksOn: e.target.value
        };
     userApi.addUser({
         data: {user}
     });
     console.log('Send this in a Post request', users)
     this.handleClearForm(e);
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
    
  
  _handleName: function (e) {
      var state = {};
      this.setState({name: e.target.value});
  },
    
  _handleGithub: function (e) {
      var state = {};
      this.setState({github: e.target.value});
  },  
    
  _handleInstagram: function (e) {
      var state = {};
      this.setState({instagram: e.target.value});
  },  
    
    
 _handleTwitter: function (e) {
      var state = {};
      this.setState({twitter: e.target.value});
  },
    
    
  _handleFacebook: function (e) {
      var state = {};
      this.setState({facebook: e.target.value});
  },  
       
    
  _handleWorksOn: function (e) {
      var state = {};
      this.setState({worksOn: e.target.value});
  },   
    
    
 handleClearForm(e) {
     
     e.preventDefault();
     
     this.setState({
         
         name: '',
         github: '',
         instagram: '',
         twitter: '',
         facebook: '',
         worksOn: ''
         
     });
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
        <form ref='user_form' onSubmit={this.onSubmit}>
          <div className={this._formGroupClass(this.state.errors.name)}>
            <label className="control-label" for="name">Name </label>
            <input name="name" ref="name" type="text" className="form-control" id="name" placeholder="Name" onChange={this._handleName} />
            <span className="help-block">{this.state.errors.name}</span>
          </div>
          <div className={this._formGroupClass(this.state.errors.github)}>
            <label className="control-label" for="github">Github</label>
            <input name="github" ref="github" type="github" className="form-control" id="github" placeholder="github" onChange={this._handleGithub} />
            <span className="help-block">{this.state.errors.github}</span>
          </div>
          <div className={this._formGroupClass(this.state.errors.instagram)}>
            <label className="control-label" for="instagram">Instagram</label>
            <input name="instagram" ref="instagram" type="instagram" className="form-control" id="instagram" placeholder="instagram" onChange={this._handleInstagram} />
            <span className="help-block">{this.state.errors.instagram}</span>
          </div>
            
          <div className={this._formGroupClass(this.state.errors.twitter)}>
            <label className="control-label" for="twitter">Twitter</label>
            <input name="twitter" ref="twitter" type="twitter" className="form-control" id="twitter" placeholder="twitter" onChange={this._handleTwitter} />
            <span className="help-block">{this.state.errors.twitter}</span>
          </div>  
            
          <div className={this._formGroupClass(this.state.errors.facebook)}>
            <label className="control-label" for="facebook">Facebook</label>
            <input name="facebook" ref="facebook" type="facebook" className="form-control" id="facebook" placeholder="facebook" onChange={this._handleFacebook} />
            <span className="help-block">{this.state.errors.facebook}</span>
          </div>    
            
        <div className={this._formGroupClass(this.state.errors.worksOn)}>
            <label className="control-label" for="worksOn">WorksOn</label>
            <input name="worksOn" ref="worksOn" type="worksOn" className="form-control" id="worksOn" placeholder="worksOn" onChange={this._handeleWorksOn} />
            <span className="help-block">{this.state.errors.worksOn}</span>
          </div>    
                
         <input type="submit" className="btn btn-primary float-right" value="Submit" />  
            
            
          <button className="btn btn-link btn-default" onClick={this.handleClearForm}>
            Clear-form </button>
        </form>
      </div>
    );
  }
});

export default AddUserContainer;