import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AuthScreen from './screens/AuthScreen'
import ProfileScreen from './screens/ProfileScreen'
import Dashboard from './screens/Dashboard'
import EditProfile from './screens/EditProfile'
import AddEducation from './screens/AddEducation'
import AddExperience from './screens/AddExperience'
import ChatScreen from './screens/ChatScreen'
import DefaultScreen from './screens/template'
// basename={process.env.PUBLIC_URL}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/try' component={DefaultScreen} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/editProfile' component={EditProfile} />
      <Route exact path='/addEducation' component={AddEducation} />
      <Route exact path='/addExperience' component={AddExperience} />
      <Route exact path='/inbox' component={ChatScreen} />
      <Route exact path='/login' component={AuthScreen} />
      <Route exact path='/profile' component={ProfileScreen} />
    </Router>
  );
}

export default App;

/*
<Route exact path='/placeorder' component={PlaceOrderScreen} />
<Route path='/order/:id' component={OrderScreen} />
*/