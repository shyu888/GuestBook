import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';

class adducontainer extends React.Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }
    


  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
   const users = {
          name: e.target.value,
          github: e.target.value
        }
   
   
   axios.post('http://localhost:3001/users', {name:e.target.value, github:e.target.value}
        
      ).then(function (response){
         console.log(response);
     });
   
     console.log('Send this in a Post request', {users})
     
  }
  
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Name" ref="name"/>
        <input type="text" placeholder="github" ref="github"/>
        <input type="submit" />
      </form>
    );
  }
}
export default adducontainer;