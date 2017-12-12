import React from 'react';
import ReactDOM from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';

import GuestNames from './GuestNames';

// state input here followed exactly the mongoose //schema: guestSignature and message which is
// also consistent with req.body.input variables

const GuestBook = React.createClass({ 

getInitialState: function () {
  return {

          guestSignature: "",
          message: ""
     
          
        };
          
this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
    this.handleMessageofGuest = this.handleMessageofGuest.bind(this);
    this.handleClick = this.handleClick.bind(this);
             
      },    
     
      
    handleSignatureOfGuest(event) {
    this.setState({ guestSignature: event.target.value });
  },
  
  
  handleMessageofGuest(event) {
      this.setState({ message: event.target.value });
    },
    
 
    handleClick(event) { 
     this.setState({
         messages: !this.state.messages});     
        
    },
    
    
getComponent()  {
if (this.state.messages)  {
    return <GuestNames/>;
}   else {
        return null;
    }
}, 
    
    
    
addToGuestBook(event) {
    event.preventDefault();
    this.setState({
      guestSignature: event.target.value,
      message: event.target.value
});

    

axios.post('http://localhost:3000/api/signatures', {
        guestSignature: this.state.guestSignature,
        message: this.state.message
      })
    .then(response => {
      console.log(response, 'Signature added!');
    })
    .catch(err => {
      console.log(err, 'Signature not added, try again');
    });
    
    
 // clear input after posting to mongoDB    
    
    this.setState({
      guestSignature: "",
      message: "",
    });
},
    
 
  render: function() {
    return (  
     <div className="form-container">
        
    <form ref='user_form' >
 <div className= "formgroup">
        <label className="control-label" for="name">Name </label>     
    
    
  <input onChange={this.handleSignatureOfGuest} name="guestSignature" className="guestSignature"
  value={this.state.guestSignature}
    placeholder="Enter your name"/>
   </div> 
    
   
  <div className= "formgroup">
        <label className="control-label" for="message">Type a Message</label>         
  <textarea name="message"
  className="MessageinputForm"
  value={this.state.message}
   placeholder="Type a message"
   onChange={this.handleMessageofGuest}/>
        
    </div>
    
    
    <button
            className="submitbuttonguestbook"
            type="submit"
            onClick={this.addToGuestBook}
              >
            Submit to Guestbook<i className="GuestBookButton2" aria-hidden="true" />
            </button>
        
<button className="submitbuttononClick"
    type="submit" onClick={this.handleClick}  label="Action" >    
  Retrieve all data from MongoDB <i className="retrieveClickButton" aria-hidden="true" />      
     {this.getComponent}
        
        </button>  
        
        
</form>
</div>
        

);

  }

});
        


 export default GuestBook;   