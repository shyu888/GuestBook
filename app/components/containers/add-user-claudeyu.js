import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';


const UsersBook = React.createClass({

getInitialState: function () {
    
   return {
      name: "",
      github: "",
      instagram: "",
      twitter: "",
      facebook: "",
      worksOn: ""
    };
    
    
    this.handleName = this.handleName.bind(this);
    this.handleGithub = this.handleGithub.bind(this);
    this.handleInstagram = this.handleInstagram.bind(this);
    this.handleTwitter = this.handleTwitter.bind(this);
    this.handleFacebook = this.handleFacebook.bind(this);
    this.handleWorksOn = this.handleWorksOn.bind(this);
     this.onSubmit = this.addUser.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
    
    
    
},
    
    
    
   componentDidMount () {
       
    fetch('mongodb://localhost:27017/React')
    .then(results => {
      return results.json();   
       
 const listuser = data.map((user) => {
        
        return(
          <li key={user.results}>
            {user}
           </li>,
            
        <ul> {listuser} </ul>

             
       );
    },
        
       this.setState({name: name}),
        this.setState({github: github}),
        this.setState({instagram: instagram}),
        this.setState({twitter: twitter}),
        this.setState({facebook: facebook}),
        this.setState({worksOn: worksOn})
        
        
         );
   });

   },
    
    
    
       
    handleName: function (event) {
    this.setState({ name: event.target.value });
  },
    
    
    handleGithub: function (event) {
      this.setState({ github: event.target.value });
    },
    
        
    handleInstagram: function (event) {
    this.setState({ instagram: event.target.value });
  },
    
    
    
    handleTwitter: function (event) {
      this.setState({ twitter: event.target.value });
    },
    
    
    handleFacebook: function (event) {
    this.setState({ facebook: event.target.value });
  },
    
    
    handleWorksOn: function (event) {
      this.setState({ worksOn: event.target.value });
    },
    
    
    
    addUser: function (event) {
    event.preventDefault();
    this.setState({
      name: event.target.value,
      github: event.target.value,
      instagam: event.target.value,
      twitter: event.target.value,
      facebook: event.target.value,
      worksOn: event.target.value,
});
        
        
 axios.post('mongodb://localhost:27017/React', {
        name: this.state.name,
        github: this.state.github,
        instagram: this.state.instagram,
        twitter: this.state.twitter,
        facebook: this.state.facebook,
        worksOn: this.state.worksOn,
      })
    .then(response => {
      console.log(response, 'User added!');
    })
    .catch(err => {
      console.log(err, 'User not added, try again');
    });
    
      
        
},
    
        
// Clear input data function here
    
     handleClearForm: function (e) {     
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
        
    
    
   
    
    
    // -------------------------------
    
  render: function() {
    return (  
     <div className="form-container">
        
    <form ref='user_form' >
 <div className= "formgroup">
        <label className="control-label" for="name">Name </label>   
    <input onChange={this.handleName} name="name" className="name" value={this.state.name} placeholder="Name"/>
    </div>
     
   <div className= "formgroup">
        <label className="control-label" for="github">Github </label>       
    <input onChange={this.handleGithub} name="github" className="github" value={this.state.github} placeholder="Github"/>
    </div>
        
        
    <div className= "formgroup">
        <label className="control-label" for="instagram">Instagram </label>         
    <input onChange={this.handleInstagram} name="instagram" className="instagram" value={this.state.instagram} placeholder="Instagram"/>
    </div>
        
    <div className= "formgroup">
        <label className="control-label" for="twitter">Twitter </label>      
    <input onChange={this.handleTwitter} name="twitter" className="twitter" value={this.state.twitter} placeholder="Twitter"/>
    </div>
     
        
   <div className= "formgroup">
        <label className="control-label" for="facebook">Facebook </label>      
    <input onChange={this.handleFacebook} name="facebook" className="facebook" value={this.state.facebook} placeholder="Facebook"/>
    </div>
        
   <div className= "formgroup">
        <label className="control-label" for="worksOn">WorksOn </label>         
    <input onChange={this.handleWorksOn} name="worksOn" className="worksOn" value={this.state.worksOn} placeholder="WorksOn"/>
    </div>
    
        
        
    <input type="submit" className="btn btn-primary float-right" value="Submit"
        onSubmit={this.addUser} />      
        
            
        
    <button className="btn btn-link btn-default" onClick={this.handleClearForm}>
            Clear-form </button>
    
   
  <div className= "userContainer">   
        <h3>User details</h3>
        <li>
        {this.state.name},
         {this.state.github},
         {this.state.instagram},
         {this.state.twitter},
         {this.state.facebook},
         {this.state.worksOn}
          </li>
  </div>
              
        
          
        
  </form>
    </div>
   
        
        
 
        
        
    );
  }

});
        
export default UsersBook;