import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
        
          
          <li><Link to="/signatures" activeClassName="active">Signatures</Link></li>
      
            
      <main>
        {props.children}
      </main>
    </div>
    );
}
