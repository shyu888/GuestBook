import React from 'react';
import { Prmoise } from 'promise';
import fetch from 'isomorphic-fetch';
import { Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';
import GuestBook from './GuestBook';


const GuestNames = React.createClass({    

getInitialState:function()
  {
    return{
      url:[]
    }
  },
  componentDidMount:function()
  {
    var that=this;
     $.ajax({
     url: 'http://localhost:3000/api/signatures',
     dataType: 'json',
     success: function(data) {
      that.setState({url:data});
     },
     error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString());
     }
   });
  },
  ChangeContent:function()
  {
    this.setState({content:"change Content"});
  },
  render:function()
  {
 var Signatures = this.state.url.map(function(signature) {
    return (
                
//form input had once changed name from SignatureOfGuest
// to guestSignature; also once changed MessageofGuest to
// message to consistent left and right side of API's Post settings
                
<div key={signature._id}>
                
  <li>
 {signature.guestSignature} {signature.SignatureOfGuest}<span> /</span>
{signature.MessageofGuest}              
{signature.message}
  </li>
 </div>
              )
    
        });
      
    return(
        
      <div>        
       {Object.keys(this.state.url).length> 0 ? Signatures : <span>Loading ..... </span>}
      </div>
        
        )
        
  }
        
});
      
React.render(
  <GuestNames  />,
  document.getElementById('root')
);
          
export default GuestNames;
        
        