import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';



const GuestNames = React.createClass({    

getInitialState: function () {
  return {
     messages: " "
    
        } 
},

// componentDidMount function should end after
//    completing data.map instead of ending at
//    setState; debugged error or undefined  //    function before because i ended at    
//   setState() 
componentDidMount: function() {
fetch('http://localhost:3000/api/signatures').then(results => {
      return results.json();    
    this.setState({messages: messages});
},

                                                   
      data.map((msg) => {
        return(
          <div key={msg.results}>
            <h3 className="h3msg">{msg.message}</h3>
<h2 className="h2sig">-{msg.SignatureOfGuest}</h2>       
            </div>
          );
  
})
    
)},

         
render: function() {
          
 return (
<div className="guestdataContainer">
          <h6>Guestbook Messages</h6>
          {this.state.messages}
        </div>
    );
}  

                                    
});


React.render(
 <GuestNames />,
        document.getElementById('root')
    
    );
          
export default GuestNames;
        
        