import React from 'react';

import _ from 'lodash';

class adducontainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
   componentDidMount() {
       
    fetch('../data/db.json') 
    .then(res =>res.json())
    .then(data => {
        
        this.setState({
            name: data.name,
            github: data.github
        });
    });
       
       
       
       
       
   }
    
    
    
    
    
  handleSubmit(e) {
    e.preventDefault();
   
    const formPayLoad = {
         name: this.state.name,
         github: this.state.github
     }; 
      
      
        console.log('Data Send', formPayLoad);
        
      }
    
    
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" ref="name"/>
        <input type="text" placeholder="github" ref="github"/>
        <input type="submit" className="btn btn-primary float-right" value="Submit"/>
      </form>
    );
  }
}

export default adducontainer;