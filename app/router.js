import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayout from './components/layouts/search-layout';

// Pages
import Home from './components/home';
import UserListContainer from './components/containers/user-list-container';
import GuestBook from './components/containers/GuestBook'
import AddUser from './components/containers/adducontainer';
import UserProfileContainer from './components/containers/user-profile-container';
import WidgetListContainer from './components/containers/widget-list-container';


export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="users">
          <Route component={SearchLayout}>
            <IndexRoute component={UserListContainer} />
          </Route>
<Route path="/api/signatures" component={GuestBook} /> 
   <Route path="/add/user" component={AddUser} /> 
    
    <Route path=":userId" component={UserProfileContainer} />
        
    
    
    
    
   </Route>
    
    
    

        

    </Route>
  </Router>
);
