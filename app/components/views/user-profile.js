import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="user-profile">
      <img src={props.imageUrl} />
      <div className="details">
        <h1>{props.name}@Instagram</h1>
      
        <a href={'http://instagram.com/' + props.instagram}>@{props.instagram}</a>
     
      <h1>{props.name}@Twitter</h1>
      
        <a href={'http://twitter.com/' + props.twitter}>@{props.twitter}</a>
      
      <h1>{props.name}@FaceBook</h1>
      
        <a href={'http://facebook.com/' + props.facebook}>@{props.facebook}</a>
      
      
      
        <p>Works on <strong>{props.worksOn}</strong></p>
        <h3>Github Repos:</h3>
        <ul className="repos">

          {props.repos.map(repo => {

            return (<li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>);

          })}

        </ul>
      </div>
    </div>
  );
}
