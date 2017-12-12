import React, { Component } from 'react';
import axios from 'axios';



    class AddUserForm extends Component {
      constructor() {
        super();
        this.state = {
          name: '',
          twitter: ''
          
        };
      }

      onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
      
      onSubmt = (e) => {
          
        e.preventDefault();
          //get our form data out of state
          const { name, twitter} = this.state;
          
          axios.post('http://localhost:3001/users', { name, twitter})
          .then((result) => {
             console.log({result})
          });
          
          
      }
      
      
      
      
      render() {
        const { name, twitter } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <input type="text" name="name" value={name} placeholder="name" onChange={this.onChange} />
            
            <input type="text" name="twitter" value={twitter} placeholder="twitter" onChange={this.onChange} />
            <button type="submit">Submit</button>
          </form>
        );
      }
    }
    
    export default AddUserForm;