import React from 'react';
import { Link } from 'react-router';
import AUC from '../containers/adduser-container';
// Using "Stateless Functional Components"
export default function(props) {

     
return (
      <div className="form-container">
        
        
        <form ref='user_form' onClick={AUC._onClick}>
     
   {props.user.map(user => {

        return (
          <div key={user.id} className="data-list-item"> 
    
    
    
    
    
    
    
    
          <div className="form-group">
            <label className="control-label" for="name">Name </label>
            <input name="name" type="text" className="form-control" id="name" placeholder="Name" onChange={AUC._onChange} />
            
          </div>
                                           
          <div className="form-group">
            <label className="control-label" for="github">Github</label>
            <input name="github" type="github" className="form-control" id="github" placeholder="Github" onChange={AUC._onChange} />
            
          </div>
            
          <div className="form-group">
            <label className="control-label" for="instagram">Instagram</label>
            <input name="instagram" ref="instagram" type="instagram" className="form-control" id="instagram" placeholder="Instagram" onChange={AUC._onChange} />
           
          </div>
            
            
          <div className="form-group">
            <label className="control-label" for="twitter">Twitter</label>
            <input name="twitter" ref="twitter" type="twitter" className="form-control" id="twitter" placeholder="twitter" onChange={AUC._onChange} />
            
          </div>
            
             <div className="form-group">
            <label className="control-label" for="facebook">Facebook</label>
            <input name="facebook" ref="facebook" type="facebook" className="form-control" id="facebook" placeholder="facebook" onChange={AUC._onChange} />
            
          </div>
            
            <div className="form-group">
            <label className="control-label" for="worksOn">WorksOn</label>
            <input name="worksOn" ref="worksOn" type="worksOn" className="form-control" id="worksOn" placeholder="worksOn" onChange={AUC._onChange} />
          
          </div> 
            
            
           <div className="controls">
              <button onClick={props._adduser.bind(null, user.id)} className="create">Create</button>
              </div> 
       


        );
         })}     
   
         
         
         
        </form>
      </div>
    );
    }