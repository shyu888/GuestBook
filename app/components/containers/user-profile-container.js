import React from 'react';
import UserProfile from '../views/user-profile';
import * as userApi from '../../api/user-api';

const UserProfileContainer = React.createClass({

  getInitialState: function() {
    return {
      name: null,
      imageUrl: null,
      twitter: null,
      worksOn: null,
     instagram: null,
      facebook: null,   
        github: null,
      repos: []
    }
  },

  componentDidMount: function() {
    let userId = this.props.params.userId
    userApi.getProfile(userId).then(profile => {
      this.setState({
        name: profile.name,
        imageUrl: profile.imageUrl,
        twitter: profile.twitter,
        worksOn: profile.worksOn,
       facebook: profile.facebook,
        instagram: profile.instagram,  
        github: profile.github,  
        repos: profile.repos
      });
    });
  },

  render: function() {
    return (
      <UserProfile {...this.state} />
    );
  }

});

export default UserProfileContainer;
